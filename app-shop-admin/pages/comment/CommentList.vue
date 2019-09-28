<template>
    <view id="commentList" class='c-l-comment-list-container'>
		<view class="s-d-comment-container" v-if="comment">
			<view class="s-d-comment-title-wrapper" v-if="comment">
				<view class="comment-remark">综合评价：<text>{{comment.avg_mark}}分</text></view>
				<text>{{comment.count}}次评价</text>
			</view>
			<view class="s-d-comment-tags-wrapper">
				<text v-for="(item, index) of tagsList" :key="index" :class="{'s-d-comment-tags-selected': item.select}" @click="tagsClick(item)">{{item.name}}</text>
			</view>
			<view>
				<block v-for="item of list" :key="item.cid">
					<scenic-detail-comment-item :item="item" @report="showReportPicket" @imageClick="imageClick"></scenic-detail-comment-item>
				</block>
			</view>
		</view>
		  <load-more :status="loadingType"></load-more>
		  <mpvue-picker :pickerValueArray="pickerValueArray" ref="reportPicker" @onConfirm="onConfirm"></mpvue-picker>
    </view>
</template>

<script>
import ScenicDetailCommentItem from '../scenic/components/ScenicDetailCommentItem.vue'
import listMixins from '@/mixin/List.js'
import Report from '@/mixin/Reports.js'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
export default {
  name: 'commentList',
  mixins: [listMixins, Report],
  components: {
    ScenicDetailCommentItem,
	mpvuePicker
  },
  data () {
    return {
      comment: null,
      mark: 0,
      tagsList: [
        {
			name: '所有',
			select: true,
			mark: 0
        },
        {
			name: '极好',
			select: false,
			mark: 5
        },
        {
			name: '较好',
			select: false,
			mark: 4
        },
        {
			name: '中等',
			select: false,
			mark: 3
        },
        {
			name: '较差',
			select: false,
			mark: 2
        },
        {
			name: '很差',
			select: false,
			mark: 1
        }
      ],
      report: null
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
    getData () {
      this.$http(this.$urlPath.commentListUrl, {
        s_id: this.$routeParams.scenicId,
        page: this.page.num,
        mark: this.mark
      }, null, (data) => {
        this.comment = data.data
        this.report = data.report
		this.loadSuccess(data.data.comment_list)
      }, (errorCode, error) => {
		this.loadFail()
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    },
    tagsClick (tag) {
      this.mark = tag.mark
      this.tagsList.forEach(element => {
        element.select = element === tag
      })
      this.list = []
	  uni.startPullDownRefresh()
    },
	imageClick (params) {
		uni.previewImage({
			urls: params.item.images,
			current: params.index
		})
	}
  },
  onLoad () {
	  uni.startPullDownRefresh()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.s-d-comment-container
	border-top #f5f5f5 solid rem(.1)
	.s-d-comment-title-wrapper
		overflow hidden
		padding rem(.2)
		borderBottom()
		.comment-remark
			float left
			textStyle(#333, .3)
			& text
				baseTextStyle($orangeColor)
		& text:nth-child(2)
			float right
			textStyle(#888, .3)
	.s-d-comment-tags-wrapper
		padding rem(.2)
		overflow hidden
		& text
			float left
			border #f5f5f5 solid 1px
			border-radius rem(.2)
			color #333
			margin-left rem(.2)
			margin-top rem(.2)
			padding rem(.1) rem(.2)
		.s-d-comment-tags-selected
			background-color $orangeColor
			color #fff
</style>
