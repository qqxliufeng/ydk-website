<template>
    <view class="h-s-header-container">
        <view class="h-s-header-input-wrapper">
            <input placeholder="景点名称、关键字" v-model="searchContent" class="input-content"></input>
            <text class="h-s-search-action" @click="search">搜索</text>
        </view>
    </view>
</template>

<script>
// import SearchHistory from 'common/mixins/search-history'
export default {
  name: 'homeSearchHeader',
  // mixins: [SearchHistory],
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    search () {
      // if (this.searchContent && this.$root.userInfo.isLogin()) {
      //   this.saveHistory(this.$root.userInfo.state.id, this.searchContent)
      // }
      this.$emit('search', this.searchContent)
      this.searchContent = ''
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.h-s-header-container
	position fixed
	top 0
	left 0
	right 0
	z-index 999
	background #fff
	borderBottom()
	.h-s-header-input-wrapper
		display flex
		align-items center
		padding rem(.1)
		margin 0 rem(.1)
		.input-content
			flex 1
			height rem(.68)
			padding-left rem(.1)
			border #F5F5F5 solid 1px
			font-size rpx($uni-font-size-base)
		.h-s-search-action
			color #ffffff
			display inline-block
			width rem(1)
			height rem(.7)
			line-height rem(.7)
			padding 0 rem(.04)
			text-align center
			border-radius 0 rem(.1) rem(.1) 0
			background-color $primary
</style>
