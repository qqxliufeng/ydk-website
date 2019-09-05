<template>
  <view class='s-l-i-container' v-if="item" @click="itemClick">
	<view class="h-l-like-img-wrapper">
		<image :src="$utils.image.getImagePath(item.scenicimages)" :key="item.scenicimages" mode="aspectFill"></image>
		  <view class="card-tip-wrapper" v-if="item.isShowHot">
			<text class="tip-text">HOT</text>
		  </view>
	</view>
	<view class="h-l-like-info-wrapper">
		<p class="title">{{item.s_title}}</p>
		<view class="tags">
		<view v-for="(itemTag, index) of item.tag" :key="index" class="tag">
			<tag size="small" :inverted="true" :type=" index === 0 ? 'warning' : 'success'" v-if="itemTag" :text="itemTag" textSize="18rpx" padding="0 12rpx"></tag>
		</view>
		</view>
		<view class="money">
		<text class="price">￥{{item.minPrice}}<text class="up">起</text></text>
		</view>
		<view class="order-wrapper">
		 <rate :value="Number(item.mark)"
				 :disabled="true"
				 size="16">
		  </rate>
		<text class="order">立即预定</text>
		</view>
	</view>
  </view>
</template>

<script>
import Tag from '@/componets/uni/uni-tag.vue'
import Rate from '@/componets/uni/rate/uni-rate.vue'
export default {
  name: 'scenicListItem',
  props: {
	item: Object
  },
  components: {
	  Tag,
	  Rate
  },
  data () {
	return {
    }
  },
  methods: {
    itemClick () {
      this.$push(this.$mRouter.scenicDetail({
			scenicId: this.item.s_id
		}))
    },
    trasformNum (num) {
      if (!num || isNaN(num) || Number(num) === 0) {
        return 0
      }
      let intNum = Number(num)
      if (intNum / 10000 >= 1) {
        return Math.floor(intNum / 10000) + '万+'
      } else {
        return intNum
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.s-l-i-container
	display flex
	padding rem(.2) rem(.3)
	borderBottom()
	.h-l-like-img-wrapper
		flex 1.5
		overflow hidden
		height rem(1.7)
		border-radius rem(.1)
		position relative
		& image
			width 100%
			height 100%
			background-color #F5F5F5
		.card-tip-wrapper
			position absolute
			top 0
			left 0
			width rem(1)
			height rem(1)
			z-index 1
			background-color #FF0000
			color #FFFFFF
			display flex
			justify-content flex-end
			align-items center
			transform rotate(45deg)
			margin-top rem(-.5)
			margin-left rem(-.5)
			.tip-text
				transform rotate(-90deg)
				font-size rpx(18)
				margin-left rem(.1)
	.h-l-like-info-wrapper
		flex 4
		padding-left .2rem
		overflow hidden
		display flex
		flex-direction column
		justify-content space-between
		position relative
		.title
			ellipsis()
			textStyle(#333, .32)
		.tags
			.tag
				display inline-block
				margin 0 rem(.05)
		.no-comment
			textStyle(#888, .25)
		.money
			overflow hidden
			position absolute
			top rem(.5)
			right rem(.1)
			.price
				textStyle($primary, .4)
				.up
					font-size rem(.25)
					color #ccc
					margin-left rem(.05)
		.order-wrapper
			display flex
			justify-content space-between
			.order
				textStyle(#fff, .25)
				background-color $orangeColor
				border-radius rem(.05)
				padding rem(.05) rem(.15)
</style>
