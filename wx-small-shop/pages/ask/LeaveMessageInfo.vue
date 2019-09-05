<template>
	<view class='l-m-info-container'>
	  <view class="content-container">
		  <view class="content-wrapper">
			<scenic-info :scenicInfo="scenicInfo" v-if="scenicInfo"></scenic-info>
			<view class="reply-title-wrapper">
				  <text>问</text>
				  <text>{{ask.content}}</text>
			  </view>
		  </view>
		  <view class="ask-content-card" >
			<view class="a-m-message-ask-info-wrapper">
			  <view class="ask-title-wrapper">
				  <text>答</text>
				  <text>共计{{ask.answer.length}}条回复</text>
			  </view>
			  <view>
				  <view class="item-container" v-for="(item, index) of ask.answer" :key="item.id">
					<view class="user-info-container">
					  <image :src="$utils.image.getImagePath(item.avatar)"></image>
					  <text>{{$utils.common.hiddenMobile(item.username)}}</text>
					  <view class="report-wrapper">
						  <text class="report" @click="showReportPicket(index)">举报<i class="el-icon-arrow-down el-icon--right"></i></text>
					  </view>
					</view>
					<p class="item-content">{{item.answer_text}}</p>
					<view class="item-info-container">
					  <text class="iconfont l-q-footer-time">&#xe790; {{item.create_time}}</text>
					  <text class="iconfont zan" :style="{color: item.is_like === 0 ? '#888' : '#64BBAE'}" @click="likeClick(index)">&#xe605; {{item.like}}</text>
					</view>
				  </view>
			  </view>
			</view>
		</view>
	  </view>
	  <view class="reply" @click="reply">我要回复</view>
	  <mpvue-picker :pickerValueArray="pickerValueArray" ref="reportPicker" @onConfirm="onConfirm"></mpvue-picker>
	</view>
</template>

<script>
import scenicInfo from './components/LeaveMessageScenicInfo'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
import Reports from '@/mixin/Reports.js'
export default {
  name: 'leaveMessageInfo',
  mixins: [Reports],
  components: {
    scenicInfo,
	mpvuePicker
  },
  data () {
    return {
      ask: {},
      scenicInfo: null
    }
  },
  methods: {
	showReportPicket (index) {
		this.$refs.reportPicker.show()
		this.selectedItem = this.ask.answer[index]
	},
	onConfirm (picObj) {
		this.doReport(3, this.selectedItem.id, picObj.label)
	},
    reply () {
		if (this.ask) {
			this.$push(this.$mRouter.replyMessage({
				scenicId: this.$routeParams.scenicId,
				aid: this.$routeParams.aid
			}))
		}
    },
    getData () {
      this.$http(this.$urlPath.askAnswerListUrl, {
        s_id: this.$routeParams.scenicId,
        aid: this.$routeParams.aid
      }, '', (data) => {
        if (data.data) {
          this.ask = data.data.ask
          this.scenicInfo = data.data.scenic
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    likeClick (index) {
		let item = this.ask.answer[index]
		if (item.is_like === 0) {
			this.$http(this.$urlPath.askAnswerLikeUrl, {
				id: item.id,
				like: 1
			}, null, (data) => {
				item.is_like = 1
				item.like = parseInt(item.like) + 1
			}, (errorCode, error) => {
				this.$toast('操作失败')
			})
		}
    }
  },
  onShow () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
tagWrapper(color)
	color #ffffff
	font-size rem(.2)
	background-color color
	border-radius rem(.08)
	width rem(.3)
	height rem(.3)
	text-align center
	display inline-block
	margin-top rem(.01)
	margin-right rem(.1)
	line-height rem(.3)
	vertical-align middle
.l-m-info-container
	.content-container
		padding rem(.3)
		margin-bottom rem($headerHeight * 1.2)
		.content-wrapper
			boxShadow()
			padding rem(.3)
			.reply-title-wrapper
				border-top 1px solid #f5f5f5
				padding-top rem(.2)
				margin-top rem(.2)
				display flex
				align-items center
				& text:nth-child(1)
					tagWrapper($primary)
				& text:nth-child(2)
					color #555555
					font-size rem(.3)
					line-height rem(.45)
		.ask-content-card
			margin-top rem(.3)
			boxShadow()
			padding rem(.3)
			.a-m-message-ask-info-wrapper
				.ask-title-wrapper
					borderBottom()
					padding-bottom rem(.2)
					display flex
					align-items center
					& text:nth-child(1)
						tagWrapper(#EA741F)
					& text:nth-child(2)
						color #555555
						font-size rem(.3)
						line-height rem(.45)
			.item-container
				padding rem(.2)
				overflow hidden
				borderBottom()
				.user-info-container
					.report-wrapper
						float right
						padding rem(.1) 0
						& .el-dropdown
							text-align right
						.report
							border-radius rem(.3)
							border #F5F5F5 solid 1px
							padding rem(.05) rem(.1)
							textStyle(#888, .25)
					& image
						width rem(.5)
						height rem(.5)
						border-radius 50%
						vertical-align middle
					& text
						margin-left rem(.2)
						vertical-align middle
				.item-content
					textStyle(#888, .28)
					padding rem(.2)
					line-height rem(.32)
				.item-info-container
					margin-top rem(.2)
					overflow hidden
					.l-q-footer-time
						color #D0D0D0
						font-size rem(.25)
					.zan
						float right
						color $primary
						font-size rem(.3)
	.reply
		position fixed
		left 0
		right 0
		bottom 0
		height rem($headerHeight)
		line-height rem($headerHeight)
		background $primary
		color #fff
		text-align center
		font-size rem(.34)
</style>
