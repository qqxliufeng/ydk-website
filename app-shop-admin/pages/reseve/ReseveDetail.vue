<template>
	<view class="r-d-detail-container">
		<view class="r-d-detail-wrapper" v-if="ticketInfo">
			<ticket-info :ticketInfo="ticketInfo" @selected="onSelectedTimeItem" ref="ticketInfo" @collection="collection" @numChange="numChange"></ticket-info>
			<ticket-contact v-if="ticketInfo.goods && ticketInfo.goods.play_info !== 0" ref="userSingleInfo" :visitorInfo="ticketInfo.goods.visitor_info"></ticket-contact>
			<ticket-user-info  @onDeleteContact="deleteContact" :contacts="contacts" :touristCount="touristCount" ref="userInfo" v-if="ticketInfo.goods && ticketInfo.goods.play_info === 2 && touristCount > 1" :visitorInfo="ticketInfo.goods.visitor_info"></ticket-user-info>
			<ticket-discount></ticket-discount>
			<view class="r-d-detail-pay-action-wrapper">
				<text class="r-d-pay-action-price">总价：<text>￥{{totalPrice}}</text></text>
				<view class="r-d-pay-action-collection" @click="collection">
				<uni-icon :size="20" color="#ffad2c" :type="collectionState ===  1 ? 'star-filled' : 'star'"></uni-icon>
				<p>收藏</p>
				</view>
				<text class="r-d-pay-action-pay" :style="{'background' : totalPrice === 0 ? '#cccccc' : '#ffad2c', 'pointer-events': totalPrice === 0 ? 'none' : 'auto'}" @click="reserve">立即预定</text>
			</view>
		</view>
	</view>
</template>

<script>
import TicketInfo from './components/TicketInfo'
import TicketDiscount from './components/TicketDiscount'
import TicketUserInfo from './components/TicketUserInfo'
import TicketContact from './components/TicketContact'
import uniIcon from '@/componets/uni/rate/uni-icon.vue'
export default {
  name: 'ReseveDetail',
  components: {
    TicketInfo,
    TicketDiscount,
    TicketUserInfo,
    TicketContact,
	uniIcon
  },
  data () {
    return {
      ticketInfo: null,
      totalPrice: 0,
      contacts: [],
      tempDate: null,
      collectionState: 0,
      touristCount: 1
    }
  },
  watch: {
	 ticketInfo (newVal, oldVal) {
		 if (newVal) {
			 this.$nextTick(() => {
			 	this.$refs.ticketInfo.init()
			 })
		 }
	 }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.orderReserve, {
        goods_id: this.$routeParams.goodsId,
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
        goods_source: this.$routeParams.goods_source || '',
        s_id: this.$routeParams.scenicId
      }, '', (data) => {
        this.ticketInfo = data.data
        this.collectionState = data.data.is_favorites
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    onSelectedTimeItem (info) {
		if (info.item) {
			// 如果是时间段并且已经过期了， 就不能再进行购买了
			if (this.ticketInfo.valid_period === 2 && this.ticketInfo.valid_period_expire === 0) {
				this.$toast('该票已不能购买')
				this.totalPrice = 0
				return
			}
			// 禁售
			if (info.item.one_stock === -2) {
				this.$toast('此票在所选日期禁售')
			} else if (info.item.one_stock === -1) { // 不限量卖
				this.tempDate = info.item
				this.touristCount = info.num
				this.totalPrice = (Number(info.item.sale_price) * parseInt(info.num)).toFixed(2)
			} else {
				if (info.item.one_stock < this.ticketInfo.goods.min_number) {
					this.totalPrice = 0
					this.$toast('所选日期余票小于最低购买数')
					return
				}
				this.tempDate = info.item
				this.touristCount = info.num
				this.totalPrice = (Number(info.item.sale_price) * parseInt(info.num)).toFixed(2)
			}
		}
    },
    collection () {
      this.$http(this.$urlPath.userUnFavoroteGoodsUrl, {
        goods_id: this.$routeParams.goodsId
      }, '正在操作…', (data) => {
        if (this.collectionState === 1) {
          this.$toast('取消收藏成功')
          this.collectionState = 0
          this.ticketInfo.is_favorites = this.collectionState
        } else {
          this.$toast('收藏成功')
          this.collectionState = 1
          this.ticketInfo.is_favorites = this.collectionState
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    reserve () {
      if (!this.tempDate) {
        this.$toast('请选择游玩日期')
        return
      }
	  if(this.ticketInfo.goods.play_info !== 0 && !this.checkUserInfo()) {
		  return
	  }
      const postData = {}
	  this.tempDate.num = this.touristCount
      postData.date = this.tempDate
	  switch (this.ticketInfo.goods.play_info) {
		  // 只需要接收短信的游客信息
		  case 1:
				postData.contact = this.$refs.userSingleInfo.tempUserInfo
				postData.user = [this.$refs.userSingleInfo.tempUserInfo]
			break
		  // 需要多个游客信息
		  case 2:
				postData.user = []
				// 如果只是买了一张票，则不需要其它游客的信息
				if (this.$refs.userInfo) {
					const userList = this.$refs.userInfo.userList
					userList.forEach(item => {
					  if (item.type !== 'add') {
						postData.user.push(item)
					  }
					})
				}
				postData.contact = this.$refs.userSingleInfo.tempUserInfo // 用于接收短信的游客信息
				postData.user.push(this.$refs.userSingleInfo.tempUserInfo) // 把联系人也放到游玩人信息里面
			break
	  }
      postData.info = {
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
        goods_source: this.ticketInfo.goods.goods_source,
        goods_id: this.$routeParams.goodsId
      }
      this.$http(this.$urlPath.orderCreate, {
        data: JSON.stringify(postData)
      }, '正在提交…', (data) => {
        this.$toast('订单提交成功')
		uni.$emit('orderUpdate')
		this.$replace(this.$mRouter.orderInfoPay({
			no: data.data.out_trade_no
		}))
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
	checkUserInfo () {
		if (this.$refs.userSingleInfo) {
			const userName = this.$refs.userSingleInfo.tempUserInfo.name
			const userPhone = this.$refs.userSingleInfo.tempUserInfo.phone
			const idCard = this.$refs.userSingleInfo.tempUserInfo.idCard
			const schoolName = this.$refs.userSingleInfo.tempUserInfo.schoolName
			const studentId = this.$refs.userSingleInfo.tempUserInfo.studentId
			if (!userName && this.ticketInfo.goods.visitor_info.indexOf('n') !== -1) {
			  this.$toast('请输入游客姓名')
			  return false
			}
			if (!userPhone && this.ticketInfo.goods.visitor_info.indexOf('m') !== -1) {
			  this.$toast('请输入游客手机号')
			  return false
			}
			if (userPhone && !this.$utils.validator.isPhone(userPhone)) {
			  this.$toast('请输入合法的手机号')
			  return false
			}
			if (!idCard && this.ticketInfo.goods.visitor_info.indexOf('id') !== -1) {
			  this.$toast('请输入身份证号')
			  return false
			}
			if (idCard && !this.$utils.validator.checkIdCard(idCard)) {
			  this.$toast('请输入合法的身份证号')
			  return false
			}
			if (!schoolName && this.ticketInfo.goods.visitor_info.indexOf('u') !== -1) {
			  this.$toast('请输入学校名称')
			  return false
			}
			if (!studentId && this.ticketInfo.goods.visitor_info.indexOf('s') !== -1) {
			  this.$toast('请输入学生证号')
			  return false
			}
			return true
		} else {
			return false
		}
	},
	deleteContact (contact) {
		for (let item of this.contacts) {
			if (item.l_name === contact.name) {
				this.contacts.splice(this.contacts.indexOf(item), 1)
				return
			}
		}
	}
  },
  onLoad() {
	  this.getData()
  },
  onShow () {
  	const selectedContact = getApp().globalData.contact
	getApp().globalData.contact = null
	if (selectedContact) {
		for (let item of this.contacts) {
			if (item.l_id === selectedContact.l_id) {
				return
			}
		}
		this.contacts.push(selectedContact)
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.r-d-detail-container
	z-index 0
	.r-d-detail-wrapper
		contentFixed()
		padding-bottom rem($headerHeight * 2)
		.r-d-detail-pay-action-wrapper
			display flex
			height rem($headerHeight)
			background-color #ffffff
			position fixed
			left 0
			right 0
			bottom 0
			align-items center
			border-top 1px solid #f5f5f5
			.r-d-pay-action-price
				flex 1
				margin-left rem(.3)
				baseTextStyle(#333)
				& text
					baseTextStyle($orangeColor)
			.r-d-pay-action-collection
				display flex
				padding 0 rem(.3)
				flex-direction column
				align-items center
				textStyle($orangeColor, .25)
			.r-d-pay-action-pay
				background-color $orangeColor
				textStyle(#fff, .28)
				display flex
				align-items center
				height 100%
				padding 0 rem(.3)
</style>
