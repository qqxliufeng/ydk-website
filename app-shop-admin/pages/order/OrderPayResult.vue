<template>
  <view class='o-i-result-container' v-if="detail">
	<view v-if="no && state === 1">
		<view class="header-warpper">
			<view class="title">
				待使用
			</view>
			<view class="o-i-use-info">
				产品已出票，{{detail.ord_play_time}}可用，请尽快使用产品
			</view>
		</view>
		<order-info-content 
			:scenic="detail.scenic"
			:voucher="detail.voucher"
			:ticketName="detail.ord_product_name"
			:ticketNum="detail.ord_ticket_num"
			:refundTickets="detail.refund_tickets"
			:sendCode="detail.send_code"
			:timeLog="detail.order_log">
		</order-info-content>
	</view>
	<view class="result-icon-container" v-else>
	  <icon class="result-icon" type="cancel" size="50"></icon>
	  <p class="result-icon-tip">支付失败</p>
	</view>
    <view class="result-action-container">
      <view @click="seeMore" class="button">继续购买</view>
      <view class="button1" v-if="no && state === 1" @click="seeOrder">查看订单</view>
    </view>
	<scenic-detail-hot :hotGoodsList="hotGoodsList" v-if="hotGoodsList && hotGoodsList.length > 0" @reseve="onReseve" marginLeft="0" marginRight="0"></scenic-detail-hot>
  </view>
</template>

<script>
import OrderInfoContent from './orderinfo/components/OrderInfoContent.vue'
import ScenicDetailHot from '@/pages/scenic/components/ScenicDetailHot'
export default {
  name: 'orderPayResult',
  components: {
	  OrderInfoContent,
	  ScenicDetailHot
  },
  data () {
    return {
      no: '',
      orderId: '',
      state: 0,
      scenicId: '',
	  detail: null,
	  hotGoodsList: null
    }
  },
  methods: {
    seeMore () {
		this.$replace(this.$mRouter.scenicDetail({
			scenicId: this.scenicId
		}))
    },
    seeOrder () {
		this.$replace(this.$mRouter.orderInfo({
			orderId: this.orderId.toString(),
			orderType: '2'
		}))
    },
	getData () {
	  this.$http(this.$urlPath.orderDetails, {
	    ord_id: this.orderId
	  }, '', (data) => {
	    this.detail = data.data
		this.getLikeInfo()
	  }, (errorCode, error) => {
	    this.$toast(error)
	  })
	},
	getLikeInfo () {
	  this.$http(this.$urlPath.scenicDetailUrl, {
		s_id: this.scenicId,
		identity: this.$ids.identity,
		store_id: this.$ids.storeId
	  }, '', (data) => {
		this.hotGoodsList = data.data.hot_goods
	  }, (errorCode, error) => {
	  })
	},
	onReseve (goodsId) {
		this.$replace(this.$mRouter.ticketDetail({
			scenicId: this.scenicId,
			goodsId: goodsId.goodsId
		}))
	}
  },
  onLoad() {
  	this.no = this.$routeParams.no || ''
  	this.orderId = this.$routeParams.orderId
  	this.state = parseInt(this.$routeParams.state || 0)
  	this.scenicId = this.$routeParams.scenicId
	this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.header-warpper
	background-color $primary
	min-height rem(1)
	padding rem(.2)
	.title
		color #FFFFFF
	.o-i-use-info
		color #eeeeee
		font-size rem(.25)
		margin-top rem(.2)
		line-height rem(.3)
	.after-service-wrapper
		margin-top rem(.2)
		border-radius rem(.08)
		background #ffffff
		opacity .8
		line-height rem(.3)
		padding rem(.2)
		overflow hidden
		color #888
		font-size rem(.25)
		& text:nth-of-type(1)
			float left
		& text:nth-of-type(2)
			float right
.result-icon-container
	text-align center
	padding-top rem(1)
	.result-icon
		font-size rem(1.5)
		color $primary
	.result-icon-tip
		textStyle(#666, .3)
		margin-top rem(.4)
.result-action-container
	margin rem(.3) 0 
	text-align center
	padding-bottom rem(.2)
	display flex
	& > view
		flex 1
	.button
		baseTextStyle($orangeColor)
		border 1px solid #f5f5f5
		border-radius rem(.1)
		text-align center
		padding rem(.1) 0
		margin 0 rem(.1)
	.button1
		baseTextStyle(#ffffff)
		background-color $primary
		border-radius rem(.1)
		padding rem(.1) 0
		margin 0 rem(.1)
>>> .s-d-hot-container
	margin 0
</style>
