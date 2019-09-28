<template>
    <view class="home-type-container" :style="{'height' : height}">
        <swiper style="height: 100%;">
			<block v-for="(items, index) of slideItems" :key="index">
				<swiper-item>
					<view class="h-t-type-container">
						<view v-for="item of items" :key="item.id" class="h-t-type-wrapper" @click="homeTypeClick(item)">
							<image :src="$utils.image.getImagePath(item.image)" class="h-t-type-icon" :key="item.image"></image>
							<p class="h-t-type-title">{{item.name}}</p>
						</view>
					</view>
				</swiper-item>
			</block>
        </swiper>
    </view>
</template>

<script>
export default {
  name: 'homeType',
  props: {
    list: Array
  },
  data () {
	return {
		height: '50vw'
	}
  },
  computed: {
	slideItems () {
		const pages = []
		this.height = this.list.length > 5 ? '50vw' : '25vw'
		this.list.forEach((element, index) => {
			let page = Math.floor(index / 8)
			if (!pages[page]) {
				pages[page] = []
			}
			pages[page].push(element)
		})
		return pages
    }
  },
  methods: {
    homeTypeClick (item) {
		this.$push(this.$mRouter.scenicList({
			categoryId: item.id
		}))
	}
  }
}
</script>

<style lang="scss" scoped>
.home-type-container{
    width: 100%;
    overflow: hidden;
	max-height: 50vw;
	height: 50vw;
    border-top: 1px solid #f5f5f5;
	.h-t-type-container{
		overflow: hidden;
		.h-t-type-wrapper{
			text-align: center;
			float: left;
			width: 20%;
			height: 25vw;
			padding-top:25rpx;
			box-sizing: border-box;
			.h-t-type-icon{
				width: 90rpx;
				height: 90rpx;
				background-color: #f5f5f5;
				border-radius: 50%;
				object-fit: cover;
			}
			.h-t-type-title{
				@include textStyle(#888, $uni-font-size-sm);
				margin-top: 2rpx;
				@include ellipsis();
			}
		}
	}
}
</style>
