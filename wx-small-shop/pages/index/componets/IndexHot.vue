<template>
    <view class="h-h-hot-container">
		<view class="title">热门推荐</view>
		<view class="item-container">
			<scroll-view class="h-h-hot-card" scroll-x="true">
			    <block v-for="(item, index) of list" :key="item.goodsId">
					<view class="h-h-hot-wrapper" @click="itemGoodsClick(item)">
						<view class="h-h-hot-image-wrapper">
							<image :src="$utils.image.getImagePath(item.scenic.scenicimages)"></image>
						</view>
						<view class="h-h-hot-wrapper-title">{{item.goodsTitle}}</view>
						<view class="h-h-hot-wrapper-prices">
							<text>价格：￥{{item.minPrice}}</text>
							<!-- <span>￥{{item.retailPrice}}</span> -->
						</view>
						<view class="h-h-hot-wrapper-sales">销量：{{item.totalSales}}</view>
						<view class="h-h-hot-tag-wrapper" v-if="index < 3">
							<view class="tag-index-top">TOP</view>
							<view class="tag-index-top">{{index+1}}</view>
						</view>
					</view>
			    </block>
			</scroll-view>
		</view>
    </view>
</template>

<script>
export default {
  name: 'homeHot',
  props: {
    list: Array
  },
  methods: {
    itemGoodsClick (item) {
		this.$push(this.$mRouter.ticketDetail({
			scenicId: item.scenic.s_id,
			goodsId: item.goodsId,
			goodsSource: item.goods_source
		}))
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
	.h-h-hot-container
		border-top #f5f5f5 solid 10rpx
		.title
			textStyle(#333, .28)
			padding rem(.2) $uni-spacing-row-base
		.item-container
			width 100%
			height rem(4.5)
			.h-h-hot-card
				height 100%
				padding 2% 0
				white-space nowrap
				.h-h-hot-wrapper
					display inline-block
					overflow hidden
					position relative
					width 35%
					margin 0 2%
					border-radius 5px
					border #f5f5f5 solid 1px
					boxShadow()
					.h-h-hot-image-wrapper
						height rem(2.7)
						& > image
							width 100%
							height 100%
					.h-h-hot-wrapper-title
						textStyle(#333, .25)
						ellipsis()
						padding rem(.25) rem(.1) rem(.05) rem(.1)
					.h-h-hot-wrapper-sales
						ellipsis()
						padding rem(.1)
						textStyle(#888, .2)
					.h-h-hot-wrapper-prices
						padding rem(.1)
						textStyle($orangeColor, .2)
						display flex
						justify-content space-between
					.h-h-hot-tag-wrapper
						position absolute
						top 0
						left 0
						background-color #D66962
						color #fff
						font-size rem(.25)
						padding rem(.05)
						text-align center
						.tag-index-top
							font-size rem(.2)
							margin-bottom rem(.05)
</style>
