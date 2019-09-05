<template>
	<view class='activity-list-container'>
		<view id="actvity_list">
			<block v-for="item of list" :key="item.assist_id">
				<view class="list-wrapper" @click="itemClick(item)">
					<view class="img-wrapper">
						<image :src="$utils.image.getImagePath(item.scenicimages)" mode="aspectFill"></image>
					</view>
					<view class="content-wrapper">
					<p class="title">{{item.goods_title}}</p>
					<view class="info-wrapper">
						<text class="rate">4.9分</text>
						<text class="sales">已售{{$utils.common.trasformNum(item.sales_number || 0)}}</text>
						<text class="price">￥{{item.retail_price}}</text>
					</view>
					<view class="tag-wrapper">
						<text v-for="(tag,index) of item.tag" :class="{'tag-1' : index % 2 === 0, 'tag-2' : index % 2 === 1}" :key="index">{{tag}}</text>
					</view>
					<view class="release-time">
						<view class="time"><text>距结束:</text><count-down :second="item.end_time - time" fontSize="24rpx" dayFontSize="24rpx"></count-down></view>
						<view class="new-price"><text>￥{{item.min_price}}</text>起</view>
					</view>
					</view>
				</view>
			</block>
			<load-more :status="loadingType"></load-more>
		</view>
	</view>
</template>

<script>
import ListMixin from '@/mixin/List.js'
import CountDown from '@/componets/uni/uni-countdown.vue'
export default {
  name: 'activityList',
  mixins: [ListMixin],
  components: {
    CountDown
  },
  data () {
    return {
      time: 0
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.assistList, {
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
        page: this.page.num
      }, null, (data) => {
        this.time = data.time
        this.loadSuccess(data.data)
      }, (errorCode, error) => {
        this.loadFail()
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    },
    itemClick (item) {
      this.$push(this.$mRouter.activityDetail({
		 s: item.scenic_id,
		 g: item.goods_id,
		 p: item.assist_id
      }))
    }
  },
  onLoad() {
  	uni.startPullDownRefresh()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.activity-list-container
	.list-wrapper
		display flex
		padding rem(.2)
		border-bottom 1px solid #f5f5f5
		.img-wrapper
			width 30%
			height rem(1.8)
			& > image
					width 100%
					height 100%
					border-radius rem(.1)
		.content-wrapper
			flex 1
			display flex
			justify-content space-between
			flex-direction column
			padding-left rem(.2)
			box-sizing border-box
			overflow hidden
			.title
				ellipsis()
				textStyle(#333, .3)
			.info-wrapper
				overflow hidden
				font-size rem(.25)
				.rate
						color $primary
						&::after
							content "|"
							display inline-block
							margin 0 rem(.2)
				.sales
					color #888
				.price
					color #888
					float right
					text-decoration line-through
			.tag-wrapper
				color #555
				font-size rem(.2)
				.tag-1
					border 1px solid $primary
					padding rem(0) rem(.03)
					color $primary
				.tag-2
					border 1px solid $orangeColor
					padding rem(0) rem(.03)
					color $orangeColor
					margin-left rem(.1)
			.release-time
				overflow hidden
				display flex
				align-items center
				justify-content space-between
				.time
					display flex
					textStyle(#666, .25)
					padding-top rem(.07)
					.time-bg
						color $primary
					& > text
						font-size rem(.25)
				.new-price
					color #888
					font-size rem(.22)
					& > text
						color $orangeColor
						font-size rem(.35)
						margin-right rem(.1)
</style>
