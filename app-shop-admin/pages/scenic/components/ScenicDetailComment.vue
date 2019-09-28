<template>
    <view class="s-d-comment-container" v-if="comment">
		<view class="s-d-comment-title-wrapper">
			<view class="comment-title">
				<text class="iconfont" style="font-size: 36rpx; color: #ffad2c; margin-right: 10rpx;">&#xe603;</text>
				<text style="font-size: 32rpx; color: #333; font-weight: bold;">综合评价：</text>
				<text>{{Number(comment.avg_mark || 0).toFixed(1)}}</text>
			</view>
			<view style="flex: 1;"></view>
			<text class="comment-count">{{comment.count || 0}}次评价</text>
		</view>
		<view class="s-d-comment-tags-wrapper">
			<text v-for="(item, index) of tagsList" :key="index" :class="{'s-d-comment-tags-selected': item.select}" @click="tagsClick(item)">{{item.name}}</text>
		</view>
		<view v-if="comment.comment_list && comment.comment_list.length > 0">
			<view v-for="(item, index) of comment.comment_list" :key="index">
				<scenic-detail-comment-item :item="item" @report="showReportPicket" @imageClick="imageClick"></scenic-detail-comment-item>
			</view>
		</view>
		<view class="comment-empty" v-else>
			暂无评价
		</view>
		<mpvue-picker :pickerValueArray="pickerValueArray" ref="reportPicker" @onConfirm="onConfirm"></mpvue-picker>
    </view>
</template>

<script>
import ScenicDetailCommentItem from './ScenicDetailCommentItem'
import Report from '@/mixin/Reports.js'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
export default {
  name: 'scenicDetailComment',
  mixins: [Report],
  props: {
    comment: Object,
    tagCanSelected: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ScenicDetailCommentItem,
	mpvuePicker
  },
  data () {
    return {
      select: true,
      mCommentList: this.comment,
      tagsList: [
		{
          name: '极好',
          select: true,
          mark: 1
        },
        {
          name: '较好',
          select: false,
          mark: 2
        },
        {
          name: '中等',
          select: false,
          mark: 3
        },
        {
          name: '较差',
          select: false,
          mark: 4
        },
        {
          name: '很差',
          select: false,
          mark: 5
        }
      ]
    }
  },
  methods: {
	showReportPicket (item) {
		this.$refs.reportPicker.show()
		this.selectedItem = item
	},
	onConfirm (picObj) {
		this.doReport(1, this.selectedItem.cid, picObj.label)
	},
    tagsClick (item) {
      if (this.tagCanSelected) {
        this.tagsList.forEach(element => {
          element.select = element === item
        })
      }
      this.$emit('tagClick', item)
    },
	imageClick (params) {
		uni.previewImage({
			urls: params.item.images,
			current: params.index
		})
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-comment-container
	boxShadow()
	margin rem(.2)
	border-radius rem(.1)
	.s-d-comment-title-wrapper
		overflow hidden
		padding rem(.2)
		borderBottom()
		display flex
		align-items center
		.comment-title
			textStyle(#333, .3)
			& text
				textStyle($orangeColor, .3)
		.comment-count
			textStyle(#888, .25)
	.s-d-comment-tags-wrapper
		padding rem(.2)
		overflow hidden
		& text
			float left
			border #f5f5f5 solid 1px
			border-radius rem(.2)
			margin-left rem(.2)
			margin-top rem(.2)
			padding rem(.1) rem(.2)
			smTextStyle(#333)
		.s-d-comment-tags-selected
			background-color $orangeColor
			color #fff
	.comment-empty
		baseTextStyle(#888)
		display flex
		justify-content center
		align-items center
		min-height rem(2)
</style>
