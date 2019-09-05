<template>
	<view class="index-ad-container" @click="adClick">
		<view class="image-wrapper" v-if="ad">
			<image :src="$utils.image.getImagePath(ad.image)" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
export default {
	name: 'indexAd',
	props: {
		ad: Object
	},
	methods: {
		adClick () {
			// uni.navigateTo({
			// 	url: '/pages/ad/AdDetail'
			// })
			// this.$mRouter.login()
		}
	}
}
</script>

<style scoped lang="stylus">
@import '~mixin.styl'
.index-ad-container
	border-top #f5f5f5 solid rpx(10)
	border-bottom #f5f5f5 solid rpx(10)
	.image-wrapper
		height rpx(200)
		& > image
			height 100%
			width 100%
</style>
