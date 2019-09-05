<template>
    <view class="s-d-comment-container" v-if="comment">
        <view class="s-d-comment-title-wrapper">
            <view>综合评价：
				<text>{{Number(comment.avg_mark || 0).toFixed(1)}}</text>
			</view>
            <text>{{comment.count || 0}}次评价</text>
        </view>
        <view class="s-d-comment-tags-wrapper">
            <text v-for="(item, index) of tagsList" :key="index" :class="{'s-d-comment-tags-selected': item.select}" @click="tagsClick(item)">{{item.name}}</text>
        </view>
        <view>
            <view v-for="(item, index) of comment.comment_list" :key="index">
                <scenic-detail-comment-item :item="item" @report="showReportPicket"></scenic-detail-comment-item>
            </view>
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
		& view:nth-child(1)
			float left
			textStyle(#333, .3)
			& text
				textStyle($orangeColor, .3)
		& text:nth-child(2)
			float right
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
</style>
