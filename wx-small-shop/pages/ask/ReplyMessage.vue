<template>
	<view class="a-m-message-content-wrapper">
		<view class="content-wrapper">
			<scenic-info v-if="scenicInfo" :scenicInfo="scenicInfo"></scenic-info>
			<view class="reply-title-wrapper">
				<text>问</text>
				<text>{{ask.content}}</text>
			</view>
		</view>
		
		<view class="ask-content-card">
			<view class="ask-title-wrapper">
				<text>答</text>
				<text>我的回复</text>
				<text class="a-m-message-submit" @click="submitAsk">发 布</text>
			</view>
			<view class="ask-content">
				<textarea placeholder="请输入您的回复哦~，最多100字" maxlength="100" v-model="content"></textarea>
			</view>
		</view>
	</view>
</template>
<script>
import scenicInfo from './components/LeaveMessageScenicInfo'
export default {
	name: 'replyMessage',
	components: {
		scenicInfo
	},
	data () {
		return {
			showLoading: false,
			showSuccessDialog: false,
			content: '',
			scenicInfo: null,
			ask: ''
		}
	},
	methods: {
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
		submitAsk () {
			if (this.content.length === 0) {
				this.$toast('请输入要回答的内容')
				return
			}
			this.$http(this.$urlPath.askAnswerUrl, {
				aid: this.$routeParams.aid,
				answer_text: this.content
			}, '正在提交…', (data) => {
				this.$toast('回复成功')
				this.$back()
			}, (errorCode, error) => {
				this.$toast(error)
			})
		}
	},
	onLoad() {
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
.a-m-message-content-wrapper
	padding rem(.3)
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
		margin-top rem(.2)
		boxShadow()
		padding rem(.2)
		border-radius rem(.1)
		.ask-title-wrapper
			display flex
			align-items center
			borderBottom()
			padding-bottom rem(.2)
			& text:nth-child(1)
				tagWrapper(#EA741F)
			& text:nth-child(2)
				flex 1
				color #555555
				font-size rem(.3)
				line-height rem(.45)
			.a-m-message-submit
				border-radius rem(.05)
				color #fff
				padding rem(.01) rem(.2)
				background-color $primary
				textStyle(#fff, .28)
				text-align center
		.ask-content
			border 1px solid #f5f5f5
			width 100%
			margin-top rem(.2)
			background-color #F7F5F5
			border-radius rem(.1)
			padding rem(.2)
			box-sizing border-box
			display inline-block
			font-size rpx($uni-font-size-base)
</style>
