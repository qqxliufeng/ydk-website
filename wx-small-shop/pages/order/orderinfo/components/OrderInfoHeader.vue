<template>
    <view class="o-i-header-container">
        <view class="o-i-header-container-title">
            <text>{{stateTip}}</text>
            <slot name="headerTitleInfo"></slot>
        </view>
        <slot name="headerInfo"></slot>
        <slot name="headerBottomInfo"></slot>
    </view>
</template>

<script>
export default {
  name: 'orderInfoHeader',
  props: {
    stateTip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.o-i-header-container
	background-color $primary
	min-height rem(1)
	padding rem(.2)
	.o-i-header-container-title
		overflow hidden
		margin-top rem(.2)
		& text:nth-child(1)
			color #ffffff
			font-size rem(.32)
</style>
