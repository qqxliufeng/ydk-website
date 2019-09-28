<template>
  <view class='o-i-container' v-if="detail">
    <view class="header-warpper">
		<view class="title">
			{{tipTitle}}
		</view>
		<view class="o-i-use-info">
			{{tipContent}}
		</view>
		<view class="after-service-wrapper" @click="orderBackProgress" v-if="detail.refund_mark !== 0">
			<text>退票记录：{{detail.refund_count}}</text>
			<text>查看进度></text>
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
    <ticket-notice-wrapper :goodsInfo="detail.goods"></ticket-notice-wrapper>
    <order-business-info :store="detail.store"></order-business-info>
    <order-detail :detail="detail"></order-detail>
    <view class="sperator-3"></view>
    <view class="bottom-action-wrapper">
      <text class="back-top" @click="backTop">
        返回到顶部
      </text>
      <text class="back-money" @click="backMoney" v-if="detail.status === 'USE_STATUS_NO' && detail.is_refund === 1 && detail.refund_mark !== 2">
        申请退款
      </text>
      <text class="comment" @click="comment">
        评价
      </text>
    </view>
  </view>
</template>

<script>
import orderInfoHeader from './components/OrderInfoHeader'
import orderInfoContent from './components/OrderInfoContent'
import ticketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import orderBusinessInfo from '@/componets/BusinessInfo.vue'
import orderDetail from './components/OrderDetail'
// import orderMixin from 'common/mixins/order-mixin'
export default {
  name: 'orderInfoUse',
  // mixins: [orderMixin],
  props: {
    detail: Object
  },
  components: {
    orderInfoHeader,
    orderInfoContent,
    ticketNoticeWrapper,
    orderBusinessInfo,
    orderDetail
  },
  data () {
    return {
		tipTitle: '暂无',
		tipContent: '暂无'
    }
  },
  watch:{
	  detail (newVal, oldVal) {
		  if (newVal.status === 'USE_STATUS_NO') { // 部分退款包含待使用的票
		    this.tipTitle = newVal.refund_mark === 2 ? '退款/售后' : '待使用'
		    this.tipContent = newVal.refund_mark === 2 ? '您的订单有退款申请，请及时查看' : '产品已出票，' + newVal.ord_play_time + '可用，请尽快使用产品'
		  } else if (newVal.status === 'USE_STATUS_REVOKE') { // 全部退款
		    this.tipTitle = '退款/售后'
		    this.tipContent = '您的订单有退款申请，请及时查看'
		  } else if (newVal.status === 'NO_COMMENT') { // 验证完了，进入待评价状态
		    this.tipTitle = '待评价'
		    this.tipContent = '快来和小伙伴们分享一下这次出游的感受吧'
		  }
	  }
  },
  methods: {
	backTop () {
		this.$emit('backTop')
	},
	backMoney () {
		this.$push(this.$mRouter.orderRefund({
			id: this.detail.ord_id
		}))
	},
	orderBackProgress () {
		this.$push('/pages/order/OrderBackProgress?id=' + this.detail.ord_id)
	},
	comment () {
		if (this.detail.status === 'NO_COMMENT') {
			this.$push(this.$mRouter.orderComment({
				orderId: this.detail.ord_id
			}))
		} else {
			this.$toast('当前订单还未进行消费')
		}
	}
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-i-container
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
