<template>
    <view class='r-n-container' v-if="goods">
      <icon type="cancel" class="clear close-icon" @click="close" color="#333333"></icon>
      <view class="scenic-info-wrapper" v-if="scenic">
        <view class="scenic-info-image-wrapper">
          <image :src="$utils.image.getImagePath(scenic.scenicimage)" mode="aspectFill"></image>
        </view>
        <view class="scenic-info">
          <p class="scenic-title">
            {{scenic.s_title}}
          </p>
          <view class="ticket-title-wrapper">
            <text class="ticket-title">
              {{goods.goods_title}}
            </text>
            <text class="ticket-price">
              ￥{{Number(scenic.minPrice || 0).toFixed(2)}}
            </text>
          </view>
          <view class="scenic-detail">
            <view class="scenic-detail-rate">
              <rate
				 :value="Number(scenic.mark)"
				 :disabled="true"
				 size="14"></rate>
            </view>
            <text class="scenic-detail-sale-count" v-if="scenic.totalSales > 0">
              已售{{$utils.common.trasformNum(scenic.totalSales)}}
            </text>
          </view>
        </view>
      </view>
      <view class="notice-info-wrapper">
          <ticket-notice-wrapper :goodsInfo="goods"></ticket-notice-wrapper>
          <business-info :store="store"></business-info>
          <view class="sperator-2"></view>
      </view>
      <view class="bottom-wrapper" >
        <text class="price-wrapper">￥{{Number(scenic.minPrice || 0).toFixed(2)}}</text>
        <text class="flex-item"></text>
        <view class="collection" @click="colletion">
			<uni-icon :size="20" color="#ffad2c" :type="collectionState ===  1 ? 'star-filled' : 'star'"></uni-icon>
			<p>收藏</p>
        </view>
        <text class="next" @click="close">下一步</text>
      </view>
    </view>
</template>

<script>
import TicketNoticeWrapper from "@/componets/TicketNoticeWrapper.vue"
import BusinessInfo from "@/componets/BusinessInfo.vue"
import Rate from "@/componets/uni/rate/uni-rate.vue"
import uniIcon from '@/componets/uni/rate/uni-icon.vue'
export default {
  name: 'reseveNotice',
  props: {
    goods: Object,
    scenic: Object,
    store: Object,
    collectionState: 0
  },
  components: {
    TicketNoticeWrapper,
    BusinessInfo,
	Rate,
	uniIcon
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('closeDialog')
    },
    colletion () {
      this.$emit('colletion')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.r-n-container
	position absolute
	top 0
	bottom 0
	left 0
	right 0
	font-size rpx($uni-font-size-base)
	.close-icon
		position absolute
		right rem(.2)
		top rem(.2)
		textStyle(#888, .4)
		z-index 100
	.scenic-info-wrapper
		display flex
		padding rem(.3)
		overflow hidden
		box-sizing border-box
		position absolute
		top 0
		left 0
		right 0
		.scenic-info-image-wrapper
			height rem(1.5)
			width rem(1.5)
			flex-shrink 0
			border-radius rem(.1)
			overflow hidden
			& image
				width 100%
				height 100%
		.scenic-info
			flex 1
			margin-left rem(.2)
			display flex
			flex-direction column
			justify-content space-between
			overflow hidden
			.scenic-title
				ellipsis()
				textStyle(#333, .3)
			.ticket-title-wrapper
				display flex
				overflow hidden
				.ticket-title
					flex 1
					ellipsis()
					textStyle(#333, .28)
				.ticket-price
					margin-left rem(.2)
					textStyle($orangeColor, .3)
					& i
						textStyle(#333, .2)
			.scenic-detail
				display flex
				align-items center
				.scenic-detail-rate
					flex 1
				.scenic-detail-sale-count
					textStyle(#333, .25)
					margin-left rem(1)
	.notice-info-wrapper
		position absolute
		top rem(2)
		left 0
		right 0
		bottom 0
		overflow scroll
	.sperator-1
		height 2px
		background-color #f5f5f5
		width 90%
		margin 0 auto
	.sperator-2
		height rem($headerHeight)
	.bottom-wrapper
		height rem($headerHeight)
		border-top 1px solid #f5f5f5
		background-color #fff
		position fixed
		bottom 0
		left 0
		right 0
		display flex
		align-items center
		padding 0 rem(.2)
		.flex-item
			flex 1
		.next
			background-color $orangeColor
			border-radius rem(.3)
			margin rem(.2)
			padding rem(.1) rem(.3)
			smTextStyle(#fff)
		.price-wrapper
			color $orangeColor
			font-size rem(.35)
			& text
				margin-left rem(.1)
				font-size rem(.2)
		.collection
			text-align center
			margin-right rem(.3)
			textStyle($orangeColor, .25)
</style>
