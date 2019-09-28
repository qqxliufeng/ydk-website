<template>
    <view class="s-d-header-container" >
        <view></view>
        <view :style="{ 'background-color': scrollTop == 0 ? '#000' : 'transparent'}" class="collection-wrapper" @click="collection">
			<uni-icon :size="20" :color="scrollTop == 0 ? '#fff' : '#000'" :type="favorites ? 'star-filled' : 'star'"></uni-icon>
        </view>
        <view :style="{opacity: opacityStyle.opacity}"></view>
        <text class="header-title" :style="{opacity: opacityStyle.opacity}">{{scenicInfo.title}}</text>
    </view>
</template>

<script>
import uniIcon from '@/componets/uni/rate/uni-icon.vue'
export default {
  name: 'scenicDetailHeader',
  props: {
    scenicInfo: Object,
    isFavorites: Number,
	scrollTop: 0
  },
  components: {
	  uniIcon
  },
  data () {
    return {
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    tempInfo () {
      return this.scenicInfo
    },
    favorites () {
      return this.isFavorites === 1
    }
  },
  watch: {
	scrollTop (newVal, oldVal) {
		if (newVal > 1) {
		  let opacity = Number(20 / newVal).toFixed(2)
		  opacity = Math.min(1, opacity)
		  this.opacityStyle.opacity = 1 - opacity
		}
		if (newVal === 0) {
		  this.opacityStyle.opacity = 0
		}
	}  
  },
  methods: {
    collection () {
      this.$emit('collection')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-header-container
	position fixed
	top 0
	left 0
	right 0
	height rem($headerHeight)
	overflow hidden
	z-index 999
	& view:nth-child(1)
		position absolute
		top 0
		left 0
		margin-left rem(.2)
		transform translateY(rem(.1))
		// background-color #000000
		opacity .5
		display inline-block
		background-color transparent
		width rem(.66)
		height rem(.66)
		border-radius 50%
		text-align center
		z-index 998
		& text
			display inline-block
			color #ffffff
			padding-left rem(.13)
			margin-top rem(.13)
			font-size rem(.4)
	& view:nth-child(2)
		position absolute
		top 0
		right 0
		margin-right rem(.2)
		transform translateY(rem(.1))
		background-color #000000
		opacity .5
		display inline-block
		width rem(.66)
		height rem(.66)
		line-height rem(.6)
		border-radius 50%
		text-align center
		z-index 998
		& text
			display inline-block
			color #ffffff
			margin-top rem(.13)
			font-size rem(.4)
	& view:nth-child(3)
		background-color #F5F5F5
		height 100%
	.header-title
		position absolute
		top 0
		left 0
		right 0
		text-align center
		line-height rem($headerHeight)
		color #333
		font-size rem(.3)
</style>
