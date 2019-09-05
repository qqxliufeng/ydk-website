<template>
  <view class='o-i-result-container'>
    <view class="result-icon-container">
      <icon class="result-icon" :type="state === 1 ? 'success' : 'cancel'" size="50"></icon>
      <p class="result-icon-tip">{{state === 1 ? '支付成功' : '支付失败'}}</p>
    </view>
    <view class="result-action-container">
      <view @click="seeMore" class="button">继续购买</view>
      <view class="button1" v-if="no && state === 1" @click="seeOrder">查看订单</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'orderPayResult',
  data () {
    return {
      no: '',
      orderId: '',
      state: 0,
      scenicId: ''
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
    }
  },
  onLoad() {
  	this.no = this.$routeParams.no || ''
  	this.orderId = this.$routeParams.orderId
  	this.state = parseInt(this.$routeParams.state || 0)
  	this.scenicId = this.$routeParams.scenicId
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
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
	margin-top rem(1.5)
	text-align center
	& > p
		margin-top rem(.5)
	.button
		width 50%
		baseTextStyle(#333)
		border 1px solid #f5f5f5
		border-radius rem(.1)
		text-align center
		padding rem(.1) 0
		margin 0 auto
	.button1
		width 50%
		baseTextStyle(#ffffff)
		background-color $primary
		border-radius rem(.1)
		padding rem(.1) 0
		margin 0 auto
		margin-top rem(.4)
</style>
