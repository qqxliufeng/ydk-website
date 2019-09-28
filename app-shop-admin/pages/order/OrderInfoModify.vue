<template>
	<view class="order-info-modify-container" v-if="detail">
		<view class="header-wrapper">
			<p class="title">修改订单</p>
			<p class="o-i-use-info">
				修改订单信息
			</p>
		</view>
		<view class="r-d-ticket-info-time-wrapper">
		    <view class="r-d-ticket-info-time-item" v-for="(item, index) of times" :key="index" @click="timeItemClick(item)" :class="[{'r-d-ticket-info-time-selected': item.isSelected},{'r-d-ticket-info-time-uneable' : !item.isEnable}]">
				<view>{{item.date || ''}}</view>
				<view>周{{$utils.getWeekByWeek(item.week) || ''}}</view>
				<view>￥{{item.price || '￥0'}}</view>
		    </view>
		    <view class="r-d-ticket-info-time-item" style="border: #63BBB0 solid 1px" @click="showCalendarDialog">
				<p class="more-date">更多日期></p>
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
		  <span class="back-top" @click="backTop">
		    返回到顶部
		  </span>
		  <span class="comment" @click="modify">
		    修改
		  </span>
		</view>
	</view>
</template>

<script>
import OrderInfoContent from '@/pages/order/orderinfo/components/OrderInfoContent.vue'
import ticketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import orderBusinessInfo from '@/componets/BusinessInfo.vue'
import orderDetail from '@/pages/order/orderinfo/components/OrderDetail.vue'
export default {
	name: 'orderInfoModify',
	components: {
		OrderInfoContent,
		ticketNoticeWrapper,
		orderBusinessInfo,
		orderDetail
	},
	data () {
		return {
			times: [
			  {
				date: '',
				week: '',
				price: '0',
				count: 0,
				salesId: '',
				isEnable: false,
				isSelected: false,
				raw: {}
			  },
			  {
				date: '',
				week: '',
				price: '0',
				count: 0,
				salesId: '',
				isEnable: false,
				isSelected: false,
				raw: {}
			  },
			  {
				date: '',
				week: '',
				price: '0',
				count: 0,
				salesId: '',
				isEnable: false,
				isSelected: false,
				raw: {}
			  }
			],
			detail: null
		}
	},
	methods: {
		showCalendarDialog () {
			console.log('修改了')
		},
		modify () {
			console.log('修改了')
		},
		getData () {
		  this.$http(this.$urlPath.orderDetails, {
		    ord_id: 18
		  }, '', (data) => {
		    this.detail = data.data
		    if (this.orderType === 1) {
		      this.detail.time = data.time
		    }
		  }, (errorCode, error) => {
		    this.$toast(error)
		  })
		}
	},
	onLoad () {
		this.getData()
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.order-info-modify-container
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
	.r-d-ticket-info-time-wrapper
		display flex
		padding rem(.2)
		borderBottom()
		.r-d-ticket-info-time-item
			width 25%
			height rem(1.35)
			margin 0 1.25%
			border #f5f5f5 solid 1px
			display flex
			justify-content center
			align-items center
			flex-direction column
			border-radius rem(.1)
			color #333
			& view:nth-child(1)
				smTextStyle(#666)
			& view:nth-child(2)
				color #888
				font-size rem(.2)
				margin-top rem(.05)
			& view:nth-child(3)
				margin-top rem(.2)
				smTextStyle($orangeColor)
			.more-date
				smTextStyle($primary)
		.r-d-ticket-info-time-selected
			border $primary solid 1px
		.r-d-ticket-info-time-uneable
			color #888
			pointer-events none
			& p
				color #ccc !important
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
			background-color $primary
			padding rem(.1) rem(.2)
			float right
			color #FFFFFF
		.back-money
			border-radius rem(.3)
			background-color $primary
			padding rem(.1) rem(.2)
			float right
			color #fff
</style>
