<template>
	<view class='ads-detail-container'>
	  <view class="ads-container">
		<web-view src="https://www.liuyiqinzi.com"></web-view>  
	  </view>
	</view>
</template>

<script>
export default {
  name: 'adsDetail',
  props: {
    path: String
  },
  mounted () {
    uni.showLoading({
    	title:'加载中…'
    })
    setTimeout(() => {
      uni.hideLoading()
    }, 3000)
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.ads-container
	width 100%
	height 100%
	position absolute
	top 0
	bottom 0
	left 0
	right 0
</style>
