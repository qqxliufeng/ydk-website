<template>
  <view class='o-i-container' v-if="detail">
	<view class="header-wrapper">
		<p class="title">待评价</p>
		<p class="o-i-use-info">
			快来和小伙伴们分享一下这次出游的感受吧
		</p>
	</view>
	<order-info-content :scenic="detail.scenic"
                        :voucher="detail.voucher"
                        :ticketName="detail.ord_product_name"
                        :ticketNum="detail.ord_ticket_num"
                        :timeLog="detail.order_log"
                        :sendCode="detail.send_code"
                        :refundTickets="detail.refund_tickets"></order-info-content>
    <ticket-notice-wrapper :goodsInfo="detail.goods"></ticket-notice-wrapper>
    <order-business-info :store="detail.store"></order-business-info>
    <order-detail :detail="detail"></order-detail>
    <view class="sperator-3"></view>
    <view class="bottom-action-wrapper">
      <span class="back-top" @click="backTop">
        返回到顶部
      </span>
      <span class="comment" @click="comment">
        评价
      </span>
    </view>
  </view>
</template>

<script>
import orderInfoContent from './components/OrderInfoContent'
import ticketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import orderBusinessInfo from '@/componets/BusinessInfo.vue'
import orderDetail from './components/OrderDetail'
export default {
  name: 'orderInfoUse',
  props: {
    detail: Object
  },
  components: {
    orderInfoContent,
    ticketNoticeWrapper,
    orderBusinessInfo,
    orderDetail
  },
  data () {
    return {
    }
  },
  watch: {
    detail (newVal, oldVal) {
      if (newVal.status !== 'NO_COMMENT') {
        this.$back()
      }
    }
  },
  methods: {
    backTop () {
      this.$emit('backTop')
    },
    comment () {
		this.$push(this.$mRouter.orderComment({
			orderId: this.detail.ord_id
		}))
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
			& span:nth-of-type(1)
				float left
			& span:nth-of-type(2)
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
