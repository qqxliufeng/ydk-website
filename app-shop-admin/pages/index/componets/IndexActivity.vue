<template>
  <view class='home-activity-container'>
    <view class="h-h-title">-&nbsp;热门活动&nbsp;-
      <text class="see-more" @click="seeMore">查看更多></text>
    </view>
	<view class="item-container">
		<scroll-view scroll-x="true" class="scroll-view-h">
			<block v-for="(item, index) of list" :key="index">
				<view class="item-wrapper" @click="activityItemClick(item)">
					<view class="item-image-wrapper">
						<image :src="$utils.image.getImagePath(item.scenicimages)" mode="aspectFill"></image>
						<view class="item-title-wrapper">
							<view class="item-title-bg"></view>
							<view class="item-title">
								<text class="tip-price">￥{{item.min_price}}</text>
								<text class="tip">助力价格</text>
							</view>
						</view>
						<view class="item-tip-wrapper">
							<view class="item-tip-bg"></view>
							<view class="time-wrapper">
								<text style="font-size: 20rpx;">距结束</text>
								<count-down :second="Math.max(0, (item.end_time - time))" fontSize="20rpx" dayFontSize="20rpx" splitorColor="#ffffff"></count-down>
							</view>
						</view>
					</view>
					<view class="scenic-name">
						{{item.scenic_name}}
					</view>
					<view class="ticket-name">
						{{item.goods_title}}
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
  </view>
</template>

<script>
import CountDown from '@/componets/uni/uni-countdown.vue'
export default {
  name: 'homeActivity',
  props: {
	  list: Array,
	  time: 0
  },
  components: {
	  CountDown
  },
  data () {
    return {
      releaseDays: 0
    }
  },
  methods:{
	 seeMore () {
		 this.$push('/pages/activity/ActivityList')
	 },
	 activityItemClick (item) {
		 this.$push(this.$mRouter.activityDetail({
			 s: item.scenic_id,
			 g: item.goods_id,
			 p: item.assist_id
		 }))
	 }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
	.home-activity-container
		border-top #f5f5f5 solid 10rpx
		.h-h-title
			textStyle(#444, .3)
			padding rem(.2) 0
			border-bottom #f5f5f5 solid 1px
			text-align center
			.see-more
				float right
				textStyle(#888, .25)
		.item-container
			width 100%
			height rem(4.5)
			.scroll-view-h
				height 100%
				padding 2% 0
				white-space nowrap
				.item-wrapper
					display inline-block
					overflow hidden
					box-shadow #C8C7CC
					width 35%
					margin 2%
					border-radius 5px
					border #f5f5f5 solid 1px
					boxShadow()
					.scenic-name
						baseTextStyle(#333)
						padding rem(.1)
					.ticket-name
						padding rem(.05) rem(.1)
						smTextStyle(#ffad2c)
					.item-image-wrapper
						height rpx(270)
						position relative
						& > image
							height 100%
							width 100%
							overflow hidden
						.item-tip-wrapper
							position absolute
							top 0
							left 0
							right 0
							height rem(.3)
							line-height rem(.3)
							color #fff
							line-height rpx(30)
							padding rpx(6) rpx(20)
							.item-tip-bg
								background red
								opacity .5
								border-bottom-right-radius rpx(30)
								position absolute
								line-height rpx(30)
								top 0
								left 0
								right 0
								bottom 0
								margin-right rem(.1)
							.time-wrapper
								position absolute
								top 0
								left 0
								right 0
								bottom 0
								z-index 1
								padding-left rem(.1)
							.item-tip-info-wrapper
								position relative
								z-index 1
						.item-title-wrapper
							position absolute
							left 0
							bottom 0
							right 0
							width 100%
							z-index 1
							.item-title-bg
								background #ffad2c
								opacity .5
								position absolute
								top 0
								left 0
								right 0
								bottom 0
							.item-title
								ellipsis()
								color #fff
								padding 0 rpx(10)
								line-height rem(.4)
								font-size rpx($uni-font-size-sm)
								box-sizing border-box
								position relative
								z-index 10
								.tip
									font-size rpx($uni-font-size-sm)
									background-color #ffad2c
									border-radius rem(.1)
									margin-left rem(.2)
									padding 0 rem(.1)
								.tip-price
									font-size rpx($uni-font-size-lg)
									font-weight bold
									font-style italic
					.time-tip
						textStyle(#333, .25)
						padding rpx(5)
						margin-bottom rpx(-10)
						margin-top rpx(10)
</style>
