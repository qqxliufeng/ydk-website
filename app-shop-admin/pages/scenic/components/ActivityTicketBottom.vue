<template>
  <view class='activity-ticket-bottom-container'>
    <view class="wrapper-1">
      <view class="collection-wrapper" @click="collection">
		<uni-icon :size="20" color="#ffad2c" :type="collectionState ===  1 ? 'star-filled' : 'star'"></uni-icon>
        <p>收藏</p>
      </view>
    </view>
    <view class="wrapper-2" @click="seeOtherGoods">查看其它商品</view>
    <view class="wrapper-3" @click="invoteFriend" v-if="isShow">
		<p class="price">{{'￥' + Number(price).toFixed(2)}}</p>
		<p>立即购买</p>
	</view>
  </view>
</template>

<script>
import uniIcon from '@/componets/uni/rate/uni-icon.vue'
export default {
  name: 'activityTicketBottom',
  props: {
    assist: Object,
    isFavorites: Number,
	isShow: {
		type: Boolean,
		default: true
	},
	price: {
		type: String,
		default: '0'
	}
  },
  components: {
	  uniIcon
  },
  data () {
    return {
      collectionState: this.isFavorites
    }
  },
  watch: {
    isFavorites (newVal, oldVal) {
      this.collectionState = newVal
    }
  },
  computed: {
    buttonName () {
      if (this.$userInfo.isLogin()) {
        if (this.assist && this.assist.join && this.assist.join.status === 1) {
          return '立即购买'
        } else {
          return '邀请好友'
        }
      } else {
        return '邀请好友'
      }
    }
  },
  methods: {
    collection () {
      this.$emit('collection')
    },
    seeOtherGoods () {
      this.$emit('seeOtherGoods')
    },
    invoteFriend () {
      this.$emit('invoteFriend')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.activity-ticket-bottom-container
	display flex
	position fixed
	bottom 0
	left 0
	right 0
	height $headerHeight
	.wrapper-1
		flex 2
		background-color #ffffff
		border-top #f5f5f5 solid 1px
		.collection-wrapper
			display flex
			padding 0 rem(.3)
			width rem(.8)
			text-align center
			flex-direction column
			justify-content center
			height 100%
			& > p
				textStyle(#FFAD2C, .25)
	.wrapper-2
		flex 1
		background-color #ff5353
		text-align center
		line-height rem($headerHeight)
		color #fff
		font-size rem(.25)
	.wrapper-3
		min-width rem(2)
		background-color $orangeColor
		text-align center
		color #fff
		font-size rem(.25)
		display flex
		flex-direction column
		justify-content center
		.price
			padding-bottom rem(.05)
			font-size rem(.26)
</style>
