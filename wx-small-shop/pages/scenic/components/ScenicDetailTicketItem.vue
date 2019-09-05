<template>
    <view class="s-d-hot-item-wrapper">
        <view class="s-d-hot-item-info" @click="itemClick">
            <view class="s-d-hot-item-info-title-wrapper">
                <p class="s-d-hot-item-info-title">{{item.goodsTitle}}</p>
                <view class="s-d-hot-item-info-price">
					<text>￥{{item.minPrice}}</text>
					<text>起</text>
				</view>
            </view>
            <view class="s-d-hot-item-info-remark-wrapper">
                 <view class="tags">
                    <tag :inverted="true" v-for="(itemTag, index) of item.tag" :key="index" class="tag" size="small" :type=" index === 0 ? 'success' : 'warning'" :text="itemTag" textSize="18rpx" padding="0 12rpx"></tag>
                 </view>
                <p class="s-d-hot-item-info-old-price">￥{{item.retailPrice}}</p>
            </view>
            <view class="s-d-hot-item-info-info-wrapper">
                <view class="s-d-hot-item-info-info-info">
                    <p>
                        <text v-if="item.totalSales > 0">已售{{$utils.common.trasformNum(item.totalSales)}}</text>
                        <text class="ticket-must">购票须知<text class="iconfont right-arrow">&#xe64c;</text></text>
                    </p>
                </view>
                <view class="s-d-hot-item-info-info-action">
                    <text class="button">立即预定</text>
                </view>
            </view>
        </view>
		<view style="margin: 0 auto; width: 80%; background-color: #EEEEEE; height: 2rpx;"></view>
    </view>
</template>

<script>
import Tag from '@/componets/uni/uni-tag'
export default {
  name: 'scenicDetailTicketItem',
  props: {
    item: Object
  },
  components: {
	Tag
  },
  methods: {
    itemClick () {
		this.$emit('reseve', {goodsId: this.item.goodsId})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-hot-item-wrapper
	position relative
	border-bottom #f5f5f5 solid 2rpx
	.s-d-hot-item-info
		padding rem(.2)
		.s-d-hot-item-info-title-wrapper
			padding rem(.1) 0
			overflow hidden
			.s-d-hot-item-info-title
				float left
				baseTextStyle(#333, .32)
			.s-d-hot-item-info-price
				float right
				& text:nth-of-type(1)
					textStyle($primary, .4)
				& text:nth-of-type(2)
					textStyle(#888888, .2)
					margin-left rem(.1)
		.s-d-hot-item-info-remark-wrapper
			position relative
			height rem(.5)
			.s-d-hot-item-info-remark
				position absolute
				top 0
				left 0
				right rem(1)
				ellipsis()
				baseTextStyle(#888888, .25)
			.s-d-hot-item-info-old-price
				position absolute
				top 0
				right 0
				baseTextStyle(#888888, .25)
				text-decoration line-through
			.tags
				margin-top rem(.08)
				.tag
					margin 0 rem(.1)
		.s-d-hot-item-info-info-wrapper
			display flex
			justify-content center
			align-items center
			margin-top rem(.1)
			.s-d-hot-item-info-info-info
				overflow hidden
				flex 1
				& p:nth-child(1)
					margin-top rem(.1)
					baseTextStyle(#888888, .25)
					& text:nth-child(1)
						margin 0 rem(.1)
				.ticket-must
					textStyle($orangeColor, .24)
					.right-arrow
						font-size rem(.2)
		.button
			background $orangeColor
			border-color $orangeColor
			smTextStyle(#fff)
			padding rem(.1) rem(.2)
			border-radius 4rpx
	.s-d-hot-item-will-online
		background-color #FEEBC6
		baseTextStyle($orangeColor, .28)
</style>
