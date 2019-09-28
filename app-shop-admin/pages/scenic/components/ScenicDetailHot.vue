<template>
    <view class="s-d-hot-container" :style="{'margin-left' : marginLeft, 'margin-right' : marginRight}">
        <view class="s-d-hot-title-wrapper">
            <text class="iconfont s-d-hot-title-icon">&#xe6a0;</text>
            <text>热门推荐</text>
        </view>
        <view v-if="hotGoodsList" style="background-color: #f5f7f8;margin: 20rpx;">
           <view v-for="(item, index) of hotGoodsList" :key="index">
               <scenic-detail-ticket-item :item="item" @reseve="onReseve"></scenic-detail-ticket-item>
            </view>
        </view>
    </view>
</template>

<script>
import ScenicDetailTicketItem from './ScenicDetailTicketItem'
export default {
  name: 'ScenicDetailHot',
  props: {
    hotGoodsList: Array,
	marginLeft: {
		type: String,
		default: '20rpx'
	},
	marginRight: {
		type: String,
		default: '20rpx'
	}
  },
  components: {
    ScenicDetailTicketItem
  },
  methods: {
	  onReseve (goodsId) {
		  this.$emit('reseve', goodsId)
	  }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-hot-container
	boxShadow()
	margin rem(.2)
	padding-bottom rem(.2)
	.s-d-hot-title-wrapper
		padding rem(.2)
		borderBottom()
		.s-d-hot-title-icon
			color $orangeColor
			font-size rem(.4)
			vertical-align middle
			& + text
				vertical-align middle
				font-size rem(.35)
</style>
