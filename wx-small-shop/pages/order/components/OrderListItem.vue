<template>
    <view>
		 <view class="o-l-item-card">
			 <view class="title-wrapper">
			 	{{item.scenic.s_title}}
			 </view>
			<view class="o-l-item-container" @click="orderItemClick(item)">
				<view class="o-l-item-img-container">
					<image :src="$utils.image.getImagePath(item.scenicimage)" mode="aspectFill"></image>
				</view>
				<view class="o-l-item-info-container">
					<view>
					  <text>{{item.ord_product_name}}</text>
					  <text class="o-l-item-info-state">{{item.stateModel.stateTip || ''}}</text>
					</view>
					<view>
					  <text>{{item.stateModel.time.title}}</text>
					  <count-down v-if="item.status === 'PAY_STATUS_NO'" :second="item.stateModel.time.time" :showDay="false" color="#67BBAE" splitorColor="#67BBAE" @timeup="countDownEnd"></count-down>
					  <text v-else class="order-time">{{item.stateModel.time.time}}</text>
					</view>
					<view>数量：{{item.ord_ticket_num}}张</view>
					<view>总价：￥{{item.ord_amount}}</view>
				</view>
			</view>
			<view class="sperator-line" v-if="item.stateModel.action1.show || item.stateModel.action2.show"></view>
			<view class="o-l-bottom-action-container">
				<button size="mini" type="default" class="o-l-bottom-action1" v-if="item.stateModel.action1.show" @click="action1Click">{{item.stateModel.action1.title}}</button>
				<button size="mini" type="primary" class="o-l-bottom-action2" v-if="item.stateModel.action2.show" @click="action2Click">{{item.stateModel.action2.title}}</button>
			</view>
		 </view>
    </view>
</template>

<script>
import CountDown from '@/componets/uni/uni-countdown.vue'
export default {
  name: 'orderListItem',
  props: {
    state: Number,
	item: Object,
	index: 0
  },
  components: {
	  CountDown
  },
  methods: {
    orderItemClick (item) {
		this.$push(this.$mRouter.orderInfo({
			orderId: item.ord_id.toString(),
			orderType: item.stateModel.orderType
		}))
    },
	action1Click () {
		this.$emit('action1Click', {index: this.index})
	},
	action2Click () {
		this.$emit('action2Click', {index: this.index})
	},
	countDownEnd () {
		
	}
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.o-l-item-card
	padding rem(.2)
	boxShadow()
	margin rem(.2)
	border-radius rem(.1)
	.title-wrapper
		ellipsis()
		lgTextStyle(#333)
		margin rem(.1) 0
		margin-top 0
		padding rem(.1) 0
		borderBottom()
	.o-l-item-container
		display flex
		padding-top rem(.1)
		.o-l-item-img-container
			flex 1.2
			overflow hidden
			height rem(1.7)
			border-radius rem(.1)
			& image
				width 100%
				height 100%
				background-color #f5f5f5
		.o-l-item-info-container
			flex 3
			padding-left rem(.1)
			display flex
			flex-direction column
			justify-content space-between
			overflow hidden
			& view:nth-child(1)
				display flex
				& text:nth-child(1)
					flex 3
					overflow hidden
					ellipsis()
					color #333333
					font-size rem(.3)
				.o-l-item-info-state
					flex 1
					text-align right
					color #888888
					font-size rem(.25)
					line-height rem(.3)
			& view:nth-child(2)
				& text:nth-child(1)
					color #888888
					font-size rem(.28)
					.time-wrapper
						textStyle($primary, .3)
			& view:nth-child(3) , & view:nth-child(4)
				 color #888888
				 font-size rem(.28)
			.order-time
				textStyle(#888, .28)
	.sperator-line
		border-bottom rem(.02) solid #f5f5f5
		margin rem(.2) 0
	.o-l-bottom-action-container
		text-align right
		.o-l-bottom-action2
			margin-left rem(.2)
</style>
