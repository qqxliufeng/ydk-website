<template>
  <view>
    <view class='activity-ticket-info-container' v-if="assist">
      <view class="tip-wrapper">
        <view class="tip-bg"></view>
        <view class="tip" v-if="$userInfo.isLogin() && assist.join.status === 1">
          恭喜，任务已完成
        </view>
        <view class="tip" v-else>
          <text v-if="Number(scenicInfo.totalStock) === 0">活动商品不限量，快来参加吧~</text>
          <text v-else class="num">限量<i>{{scenicInfo.totalStock}}</i>张，剩余<i>{{Number(scenicInfo.totalStock) - Number(scenicInfo.totalSales)}}</i>张</text>
        </view>
      </view>
      <view class="time-wrapper">
        <p class="time-relase-tip">距结束</p>
        <count-down :second="Math.max(0, assist.end_time - time)" @end="countDownEnd" fontSize="24rpx" dayFontSize="24rpx"></count-down>
      </view>
    </view>
     <view class="ticket-info-wrapper">
        <p class="title">{{scenicInfo.title +'   '+ scenicInfo.goodsTitle}}</p>
        <view class="tags-wrapper" v-if="scenicInfo.tags">
            <tag type="success" class="s-d-info-tag" size="small" v-for="(item, index) of scenicInfo.tags" :key="index" :text="item"></tag>
        </view>
      </view>
  </view>
</template>

<script>
import CountDown from '@/componets/uni/uni-countdown.vue'
import Tag from '@/componets/uni/uni-tag'
export default {
  name: 'activityTicketInfo',
  props: {
    assist: Object,
    scenicInfo: Object,
    time: Number
  },
  components: {
    CountDown,
	Tag
  },
  data () {
    return {
    }
  },
  methods: {
    countDownEnd () {
      this.$emit('countDownEnd')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.activity-ticket-info-container
	display flex
	justify-content center
	align-items center
	height rem(1)
	border-bottom 1rpx solid #f5f5f5
	.tip-wrapper
		flex 2.5
		position relative
		height 100%
		line-height rem(1)
		.tip-bg
			width 100%
			background #FF5353
			position absolute
			top 0
			bottom 0
			left 0
			right 0
			z-index -1
			margin-left rem(-.3)
			transform skewX(-30deg)
		.tip
			color #fff
			padding-left rem(.2)
			font-size rem(.25)
			.num
				font-size rem(.3)
				margin 0 rem(.1)
				& > i
					textStyle($orangeColor, .32)
					margin 0 rem(.1)
	.time-wrapper
		flex 1
		text-align center
		min-width rem(2.6)
		.time-relase-tip
			color #666
			font-size rem(.28)
		.time
			color #333
			font-size rem(.3)
			& > i
				textStyle(#666, .22)
				margin 0 rem(.05)
.ticket-info-wrapper
	padding rem(.3) rem(.2)
	.title
		textStyle(#333, .32)
	.tags-wrapper
		margin-top rem(.2)
</style>
