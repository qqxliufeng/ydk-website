<template>
  <view class='o-i-container' v-if="detail">
	<view class="header-wrapper">
		<view class="state-wrapper">
			<text class="state">
				{{title}}
			</text>
			<view class="o-i-release-pay-time">
			    剩余支付时间：
				<count-down v-if="releasePayTime > 0" :showDay="false" :second="releasePayTime" splitorColor="#ffffff" color="#ffffff" fontSize="28rpx" @timeup="countDownEnd"></count-down>
			</view>
		</view>
		<p class="o-i-pay" @click="goPay" v-if="!hasDownEnd">立即支付</p>
		<p v-else class="auto-cancel-tip">订单长时间未支付，已自动取消。</p>
	</view>
    <order-info-content :scenic="detail.scenic" :voucher="detail.voucher" :ticketName="detail.ord_product_name" :ticketNum="detail.ord_ticket_num" :timeLog="detail.order_log"></order-info-content>
    <ticket-notice-wrapper :goodsInfo="detail.goods"></ticket-notice-wrapper>
    <order-business-info :store="detail.store"></order-business-info>
    <order-detail :detail="detail"></order-detail>
    <view class="sperator-3"></view>
    <view class="bottom-action-wrapper">
      <text class="back-top" @click="backTop">
        返回到顶部
      </text>
      <text class="back-money" @click="goPay" v-if="!hasDownEnd">
        立即支付
      </text>
      <text class="comment" @click="cancelOrder" v-if="!hasDownEnd">
        取消订单
      </text>
    </view>
  </view>
</template>

<script>
import orderInfoContent from './components/OrderInfoContent'
import ticketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import orderBusinessInfo from '@/componets/BusinessInfo.vue'
import orderDetail from './components/OrderDetail'
// import orderMixin from 'common/mixins/order-mixin'
import CountDown from '@/componets/uni/uni-countdown.vue'
export default {
  name: 'orderInfoUse',
  // mixins: [orderMixin],
  props: {
    detail: Object
  },
  components: {
    orderInfoContent,
    ticketNoticeWrapper,
    orderBusinessInfo,
    orderDetail,
    CountDown
  },
  data () {
    return {
      hasDownEnd: false,
	  releasePayTime: 0
    }
  },
  watch:{
	detail (newVal, oldVal) {
		if (newVal) {
			this.releasePayTime = Math.max(0, Number(this.detail.timeout_express) - Number(this.detail.time))
		} else {
			this.releasePayTime = 0
		}
	}
  },
  computed: {
    title () {
      return this.hasDownEnd ? '已取消' : '待付款'
    }
  },
  methods: {
    countDownEnd () {
      this.hasDownEnd = true
    },
    backTop () {
      this.$emit('backTop')
    },
    goPay () {
      if (this.releasePayTime === 0 || this.hasDownEnd) {
        this.$toast('订单长时间未支付，已自动取消')
        return
      }
	  this.$push(this.$mRouter.orderInfoPay({
		  no: this.detail.out_trade_no
	  }))
    },
    cancelOrder () {
		uni.showModal({
			title: '提示',
			content: '是否取消此订单?',
			confirmText: '取消',
			cancelText: '再想想',
			success: (res) => {
				if (res.confirm) {
					this.$http(this.$urlPath.orderCancel, {
					  ord_id: this.detail.ord_id
					}, '正在取消…', (result) => {
					  this.$toast('订单取消成功')
					  uni.$emit('orderUpdate')
					  this.$back()
					}, (errorCode, error) => {
					  this.$toast(error)
					})
				}
			}
		})
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-i-container
	.header-wrapper
		background-color $primary
		min-height rem(1)
		padding-bottom rem(.2)
		.state-wrapper
			display flex
			justify-content space-between
			padding rem(.2)
			.state
				textStyle(#fff, .32)
			.o-i-release-pay-time
				color #ffffff
				font-size rem(.25)
				float right
				line-height rem(.3)
		.o-i-pay
			border rem(.01) solid #ffffff
			width 90%
			margin 0 auto
			color #ffffff
			text-align center
			padding rem(.15) 0
			border-radius rem(.1)
			margin-top rem(.3)
			font-size rem(.3)
		.auto-cancel-tip
			color #fff
			margin-top rem(.2)
			font-size rem(.25)
			margin-left rem(.2)
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
	.sperator-1
		background-color #f5f5f5
		height 2px
		width 90%
		margin 0 auto
	.sperator-3
		height rem($headerHeight)
	.bottom-action-wrapper
		overflow hidden
		padding rem(.1) rem(.2)
		box-sizing border-box
		border-top 1px solid #f5f5f5
		background-color #ffffff
		height rem($headerHeight)
		position fixed
		left 0
		right 0
		bottom 0
		font-size rem(.25)
		.back-top
			border-radius rem(.3)
			border 1px solid $primary
			padding rem(.1) rem(.2)
			color $primary
			float left
		.comment
			border-radius rem(.3)
			border 1px solid $primary
			padding rem(.1) rem(.2)
			float right
			color $primary
			margin-right rem(.3)
		.back-money
			border-radius rem(.3)
			background-color $primary
			padding rem(.1) rem(.2)
			float right
			color #fff
</style>
