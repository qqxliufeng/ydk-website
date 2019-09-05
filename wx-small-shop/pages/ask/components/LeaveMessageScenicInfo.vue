<template>
	<view class='l-m-scenic-info'>
	  <view class="a-m-message-scenic-info-wrapper">
		<view class="a-m-message-scenic-info-img-wrapper">
		  <image :src="$utils.image.getImagePath(scenicInfo.scenicimages)"></image>
		</view>
		<view class="a-m-message-scenic-info-content-wrapper">
		  <p class="title">{{scenicInfo.s_title}}</p>
		  <p class="info">{{scenicInfo.mark}}分<text v-if="scenicInfo.total_sales > 0"> | {{$utils.common.trasformNum(scenicInfo.total_sales)}}次</text></p>
		</view>
	  </view>
	</view>
</template>

<script>

export default {
  name: 'leaveMessageScenicInfo',
  props: {
	  scenicInfo: Object
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.l-m-scenic-info
	.a-m-message-scenic-info-wrapper
		display flex
		.a-m-message-scenic-info-img-wrapper
			height rem(1.3)
			width rem(1.5)
			overflow hidden
			& image
					width 100%
					height 100%
					border-radius rem(.1)
					object-fit cover
		.a-m-message-scenic-info-content-wrapper
			flex 1
			display flex
			flex-direction column
			justify-content space-around
			overflow hidden
			padding-left rem(.2)
			.title
				textStyle(#333, .3)
				ellipsis()
			.info
				textStyle(#888, .28)
</style>
