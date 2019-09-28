<template>
  <view class='o-i-container' v-if="detail">
	<view class="header-wrapper">
		<view>
			<p class="title">{{stateModel.stateTip}}</p>
			<p class="o-i-use-info">
				{{stateModel.discription}}
			</p>
		</view>
		<view v-if="detail.refund_mark !== 0">
			<view class="after-service-wrapper" @click="orderBackProgress">
				<text>退票记录：{{detail.refund_count}}</text>
				<text>查看进度></text>
			</view>
		</view>
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
      <text class="back-top" @click="backTop">
        返回到顶部
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
    orderDetail
  },
  data () {
    return {
      stateModel: {
		  stateTip: '暂无',
		  discription: '暂无'
	  }
    }
  },
  watch: {
    detail (newVal, oldVal) {
      if (newVal) {
        switch (newVal.status) {
          case 'USE_STATUS_OFF': // 被取消
            this.stateModel.stateTip = '已取消'
            this.stateModel.discription = '订单已经取消，如有需要请重新下单购买'
            break
          case 'USE_STATUS_EXPIRE': // 已过期
            this.stateModel.stateTip = '已过期'
            this.stateModel.discription = '订单已经过期，如有需要请重新下单购买'
            break
          case 'USE_STATUS_OVER':
          case 'ALREADY_COMMENT': // 已经评价
            this.stateModel.stateTip = '已完成'
            this.stateModel.discription = '感谢您的本次消费，订单已经完结'
            break
          case 'USE_STATUS_REVOKE': // 已退款
            this.stateModel.stateTip = '退款/售后'
            this.stateModel.discription = '您的订单有退款申请，请及时查看'
            break
          case 'USE_STATUS_NO': // 待使用
            this.stateModel.stateTip = '待使用'
            this.stateModel.discription = '产品已出票，请尽快使用产品'
            break
          case 'NO_COMMENT': // 待评价
            this.stateModel.stateTip = '待评价'
            this.stateModel.discription = '快来和小伙伴们分享一下这次出游的感受吧'
            break
        }
      }
    }
  },
  methods: {
    orderBackProgress () {
      this.$push('/pages/order/OrderBackProgress?id=' + this.detail.ord_id)
    },
    backTop () {
      this.$emit('backTop')
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
