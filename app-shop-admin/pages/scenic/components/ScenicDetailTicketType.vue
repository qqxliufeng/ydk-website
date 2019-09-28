<template>
    <view class="s-d-t-type-container" v-if="typeGoodsList && typeGoodsList.length > 0">
        <view class="s-d-t-type-title-wrapper" :class="{'tab-fixed' : isFixed}"  ref="type" @click="positionType">
            <text class="iconfont title">&#xe6c0;</text><text style="font-size: 32rpx; color: #333; font-weight: bold; vertical-align: middle;">优惠信息</text>
        </view>
        <view id="tab" v-show="isFixed" style="height: 1.72rem"></view>
        <view>
             <scroll-view :scroll-x="true" class="h-h-hot-card">
				<text v-for="(tabItem, index) of tempTypeGoodsList" 
					  :key="tabItem.goodsTypeId" 
					  class="tab-item" 
					  @click="selectTabItem(index)" 
					  :class="{'tab-item-selected' : tabItem.isSelected}">{{tabItem.goodsTypeName}}
				</text>
             </scroll-view>
             <view style="height: 1px; background-color:#f5f5f5"></view>
             <view v-if="currentTabItems && currentTabItems.length > 0" style="background-color: #f5f7f8;margin: 20rpx;">
                <view v-for="item of currentTabItems" :key="item.goodsId">
                    <scenic-detail-ticket-item :item="item" @reseve="onReseve"></scenic-detail-ticket-item>
                </view>
            </view>
            <view v-else class="s-d-l-m-message-empty">
                <text>暂无门票</text>
            </view>
        </view>
    </view>
</template>

<script>
import ScenicDetailTicketItem from './ScenicDetailTicketItem'
export default {
  name: 'scenicDetailTicketType',
  props: {
    typeGoodsList: Array
  },
  components: {
    ScenicDetailTicketItem
  },
  data () {
    return {
      headerHeight: 0.86 * 50,
      offsetTop: 0,
      isFixed: false,
      isScroll: false,
      swiperOption: {
        slidesPerView: 5
      },
      currentTabItems: null,
      tempTypeGoodsList: null
    }
  },
  watch: {
    typeGoodsList (newVal, oldVal) {
      if (newVal && newVal.length > 0) {
        this.tempTypeGoodsList = newVal.filter((item) => {
          return item.goods_list && item.goods_list.length > 0
        })
        this.tempTypeGoodsList.forEach((item, index) => {
          this.$set(item, 'isSelected', index === 0)
        })
        if (this.tempTypeGoodsList && this.tempTypeGoodsList.length > 0) {
          this.currentTabItems = this.tempTypeGoodsList[0].goods_list
        }
      }
    }
  },
  methods: {
		onReseve (goodsId) {
			this.$emit('reseve', goodsId)
		},
		positionType () {
		  if (this.isFixed) {
			document.querySelector('#tab').scrollIntoView()
			this.isScroll = true
		  }
		},
		selectTabItem (index) {
		  if (this.tempTypeGoodsList && this.tempTypeGoodsList.length > 0) {
			this.tempTypeGoodsList.forEach((item, i) => {
			  item.isSelected = index === i
			})
			this.currentTabItems = this.tempTypeGoodsList[index].goods_list
		  } else {
			this.currentTabItems = null
		  }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.tab-item
	display inline-block
	text-align center
	line-height rem(.5)
	height rem(.5)
	margin rem(.15) rem(.2)
	color #888
	padding rem(.01) rem(.2)
	font-size rem(.28)
.tab-item-selected
	color #fff
	border-radius rem(.3)
	background-color #ffad2c
.tab-fixed
	position fixed
	top rem($headerHeight)
	left 0
	right 0
	background-color #ffffff
	z-index 999
.tab-scroll
	margin-top rem(2 * $headerHeight)
.s-d-t-type-container
	boxShadow()
	margin rem(.2)
	border-radius rem(.1)
	padding-bottom rem(.2)
	.s-d-t-type-title-wrapper
		textStyle(#333, .3)
		borderBottom()
		height rem($headerHeight)
		line-height rem($headerHeight)
		padding-left rem(.2)
		.title
			color $orangeColor
			font-size rem(.3)
			vertical-align middle
			margin-right rem(.1)
	.s-d-t-type-wrapper
		padding rem(.2)
	.s-d-l-m-message-empty
		display flex
		justify-content center
		align-items center
		min-height rem(2)
		& > text
			textStyle(#888, .28)
</style>
