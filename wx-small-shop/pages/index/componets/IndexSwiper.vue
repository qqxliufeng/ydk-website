<template>
	<view class="index-swiper-container" :style="{'height': switperHeight}">
		<swiper :autoplay="true" :circular="true" style="height: 100%;" v-if="list.length > 0">
			<swiper-item v-for="(item, index) of list" :key="index">
				<image :src="$utils.image.getImagePath(item.image)" mode="aspectFill" class="swiper-wrapper" lazy-load="true"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'indexSwiper',
	props:{
		list: Array
	},
	data () {
		return {
			switperHeight: '350rpx'
		}
	},
	mounted() {
		uni.getSystemInfo({
			success: (result) => {
				this.switperHeight = result.screenWidth / 2.1428 + 'px'
			}
		})
	}
}
</script>

<style scoped lang="scss">
	.index-swiper-container{
		height: 350rpx;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
</style>
