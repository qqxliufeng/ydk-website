<template>
	<view class="p-content-container" ref="pContent">
		<view class="p-info-container">
			<view class="p-info-header-wrapper">
				<image class="p-info-header" :src="avatar" mode="aspectFill"></image>
			</view>
			<view>
				<view class="p-info-header-vip-container">
					<text class="p-info-header-vip">会员</text>
					<text>{{$utils.validator.isPhone(userPhone) ? $utils.common.hiddenMobile(userPhone) : userPhone}}</text>
				</view>
				<p class="p-info-header-id">ID: {{uid || '暂无'}}</p>
			</view>
			<text class="iconfont message" @click="message">&#xe60c;</text>
		</view>
			<view class="p-order-all">
					<text>我的订单</text>
			</view>
			<view class="p-order">
				<view class="p-order-item" v-for="(item,index) of orderItemList" :key="index">
					<view class="item" @click="orderItemClick(item)">
						<view class="badge-wrapper" v-if="item.badage > 0">
							<uni-badge :text="item.badage" type="error"></uni-badge>
						</view>
						<image :src="item.icon" alt=""></image>
						<p>{{item.title}}</p>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view>
				<view>
					<view v-for="(item,index) of actionItemList" :key="index" class="p-action-item" @click="itemClick(index)">
						<image :src="item.icon" alt=""></image>
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
			<technology-support></technology-support>
	</view>
</template>
<script>
import uniBadge from '@/componets/uni/uni-badge.vue'
import img1 from '../../static/icon_waiting_pay.png'
import img2 from '../../static/icon_waiting_use.png'
import img3 from '../../static/icon_waiting_comment.png'
import img4 from '../../static/icon_back_money.png'
import img5 from '../../static/icon_collection.png'
import img6 from '../../static/icon_youhuiquan.png'
import img7 from '../../static/icon_leave_message.png'
import img8 from '../../static/icon_contact.png'
import img9 from '../../static/icon_personal_info.png'
import img10 from '../../static/icon_feed_back.png'
import UpdateData from '@/mixin/UpdateData.js'
import TechnologySupport from '@/componets/TechnologySupport.vue'
export default {
  name: 'personal',
  mixins: [UpdateData],
  components: {
  	uniBadge,
	TechnologySupport
  },
  data () {
    return {
      orderItemList: [
        {
          title: '待付款',
          icon: img1,
          badage: 0,
          index: 0
        },
        {
          title: '待使用',
          icon: img2,
          badage: 0,
          index: 1
        },
        {
          title: '待评价',
          icon: img3,
          badage: 0,
          index: 2
        },
        {
          title: '售后/退款',
          icon: img4,
          badage: 0,
          index: 3
        }
      ],
      actionItemList: [
        {
          title: '我的收藏',
          icon: img5
        },
        {
          title: '我的优惠券',
          icon: img6
        },
        {
          title: '留言板',
          icon: img7
        },
        {
          title: '常用联系人',
          icon: img8
        },
        {
          title: '个人信息',
          icon: img9
        },
		{
		  title: '意见反馈',
		  icon: img10
		}
      ],
      isShowRedNotify: true,
      contentDivScroll: 0,
	  uid: this.$userInfo.state.id,
	  userPhone: this.$userInfo.state.username || this.$userInfo.state.mobile || '',
	  avatar: this.$utils.image.getImagePath(this.$userInfo.state.avatar || '')
    }
  },
  methods: {
    message () {
		this.$push('/pages/message/Message')
    },
    orderItemClick (item) {
      item.badage = 0
	  this.$push('/pages/order/OrderList?state=' + item.index)
    },
    getData () {
      this.$http(this.$urlPath.orderStatusNum, {}, null, (data) => {
        this.orderItemList[0].badage = data.data.pay_count
        this.orderItemList[1].badage = data.data.use_count
        this.orderItemList[2].badage = data.data.comment_count
        this.orderItemList[3].badage = data.data.refund_count
      }, (errorCode, error) => {
        this.$toast(error)
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    },
    itemClick (index) {
		let url = ''
		switch (index) {
			case 0:
				url = '/pages/collection/MyCollection'
				break
			case 1:
				url = '/pages/coupon/Coupon'
				break
			case 2:
				url = '/pages/mine/LeaveMessage'
				break
			case 3:
				url = '/pages/mine/ContactsList?mode=edit'
				break
			case 4:
				url = '/pages/mine/PersonalInfo'
				break
			case 5:
				url = '/pages/feedback/FeedBack'
				break
		}
		uni.navigateTo({
			url: url,
		})
    },
	onLogin () {
		this.uid = this.$userInfo.state.id,
		this.userPhone = this.$userInfo.state.username || this.$userInfo.state.mobile || '',
		this.avatar = this.$utils.image.getImagePath(this.$userInfo.state.avatar || '')
	}
  },
  onLoad () {
	if (this.$userInfo.isLogin()) {
		this.getData()
	}
  },
  onPullDownRefresh() {
  	if (this.$userInfo.isLogin()) {
  		this.getData()
  	} else {
		uni.stopPullDownRefresh()
	}
  },
  onTabItemTap (tabItem) {
	if (!this.$userInfo.isLogin()) {
		uni.switchTab({
			complete:() => {
				getApp().globalData.backPage = '/pages/mine/index'
				this.$push('/pages/login/Login')
			},
			url: '/pages/index/index'
		})
	}
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.p-content-container
	.login-wrapper
		position relative
		color #ffffff
		display flex
		flex-direction row
		background-color $primary
		align-items center
		height rem(2.5)
		& > button
			width 50%
			height rem(.6)
			color #FFFFFF
			font-size rem(.24)
			line-height rem(.6)
	.p-info-container
		position relative
		color #ffffff
		display flex
		flex-direction row
		background-color $primary
		align-items center
		height rem(2.5)
		.message
			position absolute
			top rem(.2)
			right rem(.2)
		.p-info-header-wrapper
			width rem(1)
			height rem(1)
			padding rem(.2)
			margin rem(.2)
			.p-info-header
				width 100%
				height 100%
				border-radius 50%
				background-color #f5f5f5
		.p-info-header-vip-container
			color #ffffff
			margin-bottom rem(.35)
			font-size rem(.3)
			.p-info-header-vip
				border rem(.02) solid #ffffff
				border-radius rem(.05)
				padding rem(.01) rem(.1)
				font-size rem(.2)
				line-height rem(.35)
				margin-right rem(.1)
				vertical-align middle
		.p-info-header-id
			font-size rem(.28)
			color #f5ffff
	.p-order-all
		border-bottom rem(.01) solid #f5f5f5
		margin rem(.2)
		padding rem(.2) 0
		& text
			baseTextStyle(#333)
	.p-order
		display flex
		justify-content center
		.p-order-item
			flex 1
			text-align center
			font-size rpx($uni-font-size-sm)
			color #666
			.item
				position relative
				color #333333
				font-size rem(.25)
				.badge-wrapper
					position absolute
					top 0
					right 10%
				& image
					margin rem(.1) 0
					width rem(.5)
					height rem(.5)
	.line
		margin rem(.3) 0
		background-color #f5f5f5
		height rem(.15)
	.p-action-item
		border-bottom 1px solid #f5f5f5
		margin 0 rem(.2)
		padding rem(.1) 0
		line-height rem(.8)
		color #333333
		font-size rem(.28)
		& image
			width rem(.4)
			height rem(.4)
			margin-right rem(.2)
			vertical-align middle
		& text
			font-size rem(.28)
			vertical-align middle
</style>
