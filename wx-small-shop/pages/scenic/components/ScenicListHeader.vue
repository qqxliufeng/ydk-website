<template>
    <view class="s-l-header-container">
        <view class="s-l-header-info-wrapper">
            <text class="s-l-header-input" @click="search">
                <i class="el-icon-search"></i>
                景点、门票
            </text>
        </view>
    </view>
</template>

<script>
export default {
  name: 'ScenicListHeader',
  methods: {
    search () {
		this.$push('/pages/search/Search')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-l-header-container
	display flex
	background-color #ffffff
	height rem($headerHeight)
	line-height rem($headerHeight)
	align-items center
	z-index 999
	borderBottom()
	.s-l-header-back
		margin-left rem(.3)
		text-align center
		color #333
		font-size rem(.35)
	.s-l-header-info-wrapper
		background-color #f5f5f5
		border-radius rem(.1)
		flex 1
		margin 0 rem(.2)
		line-height rem(.65)
		display flex
		.s-l-header-location
			color #333
			font-size rem(.32)
			padding 0 rem(.2)
		.s-l-header-input
			color #888888
			font-size rem(.25)
			flex 1
			padding-left rem(.2)
		.vertical-line
			width 1px
			margin rem(.1)
			background-color #cccccc
</style>
