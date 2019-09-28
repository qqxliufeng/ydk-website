<template>
  <view class='loading-fail-container'>
    <p class="iconfont empty-icon">&#xe606;</p>
    <button type="warning" round @click="reload">加载失败，点击重试…</button>
  </view>
</template>

<script>
export default {
  name: '',
  methods: {
    reload () {
      this.$emit('reload')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.loading-fail-container
	display flex
	flex-direction column
	justify-content center
	align-items center
	position absolute
	left 0
	right 0
	top 0
	bottom 0
	.empty-icon
		margin-bottom rem(1)
		textStyle($primary, 2)
</style>
