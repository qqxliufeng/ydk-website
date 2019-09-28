<template>
	<view>
	  <view class="a-m-message-content-wrapper">
		<view class="scenic-warpper">
			<scenic-info :scenicInfo="scenicInfo" v-if="scenicInfo"></scenic-info>
		</view>
		<view class="a-m-message-ask-info-wrapper">
			<view class="ask-title-wrapper">
				<text>问</text>
				<text>我的提问</text>
				<text class="submit" @click="submitAsk">发 布</text>
			</view>
			<view class="ask-content">
				<textarea placeholder="请输入您的问题哦~，最多100字" maxlength="100" v-model="askContent"></textarea>
			</view>
		</view>
	  </view>
	</view>
</template>
<script>
import scenicInfo from './components/LeaveMessageScenicInfo'
export default {
  name: 'askMessage',
  components: {
    scenicInfo
  },
  data () {
    return {
      showLoading: false,
      askContent: '',
	  scenicInfo: null
    }
  },
  methods: {
    submitAsk () {
      if (this.askContent.length < 10) {
        this.$toast('提问的内容至少10个字')
        return
      }
      this.$http(this.$urlPath.askAddUrl, {
        s_id: this.$routeParams.scenicId,
        content: this.askContent
      }, '正在发布…', (data) => {
        this.$toast('提问成功')
        this.$back()
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
	getData () {
      this.$http(this.$urlPath.askAnserGetScenicUrl, {
        s_id: this.$routeParams.scenicId
      }, null, (data) => {
        this.scenicInfo = data.data.scenic
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  onLoad () {
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
	.scenic-warpper
		padding rem(.3)
		boxShadow()
	.a-m-message-ask-info-wrapper
		boxShadow()
		padding rem(.2)
		margin-top rem(.2)
		border-radius rem(.1)
		.ask-title-wrapper
			display flex
			align-items center
			borderBottom()
			padding-bottom rem(.2)
			& text:nth-child(1)
				tagWrapper($primary)
			& text:nth-child(2)
				flex 1
				color #555555
				font-size rem(.3)
				line-height rem(.45)
			.submit
				background-color $primary
				border-radius rem(.05)
				color #fff
				padding rem(.1) rem(.2)
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
