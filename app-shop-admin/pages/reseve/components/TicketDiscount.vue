<template>
    <view class="r-d-discount-container">
        <view class="r-d-discount-title-wrapper">
            优惠
        </view>
        <view class="r-d-discount-item-wrapper">
            <text class="r-d-discount-item-tag">券</text>
            <text class="r-d-discount-item-name">优惠券</text>
            <text class="r-d-discount-item-des">暂无可用</text>
        </view>
    </view>
</template>

<script>
export default {
  name: 'TicketDiscount'
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.r-d-discount-container
	border-top rem(.2) solid #f5f5f5
	padding rem(.3)
	.r-d-discount-title-wrapper
		textStyle(#333, .3)
		borderBottom()
		padding-bottom rem(.3)
	.r-d-discount-item-wrapper
		display flex
		align-items center
		padding rem(.3) 0
		borderBottom()
		.r-d-discount-item-tag
			background-color $orangeColor
			display inline-block
			width rem(.2)
			height rem(.2)
			line-height rem(.25)
			padding rem(.05)
			font-size rem(.2)
			color #ffffff
			margin-right rem(.2)
		.r-d-discount-item-name
			flex 1
		.r-d-discount-item-des
			textStyle(#cccccc, .28)
</style>
