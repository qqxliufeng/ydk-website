<template>
	<view class="index-swiper-container" :style="{'height': switperHeight, 'margin-top': isMarinTop ? '86rpx' : '0'}">
		<swiper :autoplay="true" :circular="true" style="height: 100%;" v-if="list.length > 0" :indicator-dots="true" indicator-color="#f5f5f5" indicator-active-color="#ffad2c" :interval="2500">
			<swiper-item v-for="(item, index) of list" :key="index" @click="itemClick(item)">
				<image :src="$utils.image.getImagePath(item.image)" mode="aspectFill" class="swiper-wrapper" lazy-load="true"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'indexSwiper',
	props:{
		list: Array,
		isMarinTop: {
			type: Boolean,
			default: true
		}
	},
	data () {
		return {
			switperHeight: '350rpx'
		}
	},
	methods: {
		itemClick (item) {
			this.$emit('itemClick', item)
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
		margin-top: $header-height;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
</style>
