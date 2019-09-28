<template>
    <view class='l-m-item-container'>
      <view class="l-q-card">
          <view class="l-q-content-container">
              <text>问</text>
              <text>{{tempItem.content}}</text>
          </view>
          <view class="l-q-content-r-container" v-if="tempItem.answer">
              <text>答</text>
              <text>{{tempItem.answer.answer_text}}</text>
          </view>
          <view class="l-q-footer-container">
              <text class="iconfont l-q-footer-time">&#xe790; {{tempItem.answer ? tempItem.answer.create_time : '暂无'}}</text>
              <p class="l-q-footer">
                <text v-if="tempItem.answer" @click="startMessageInfo">查看其它答案</text>
                <text v-if="tempItem.answer" style="margin: 0 10rpx;">|</text>
                <text @click="replyMessage" class="l-q-footer-to-answer">我要回答</text>
              </p>
          </view>
          <view class="report-wrapper">
			<text class="report" @click="report">举报</text>
          </view>
      </view>
    </view>
</template>

<script>
export default {
  name: 'leaveMessageItem',
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      tempItem: this.item
    }
  },
  methods: {
	report () {
		this.$emit('reportClick', this.item)
	},
    replyMessage () {
		this.$push(this.$mRouter.replyMessage({
			scenicId: this.tempItem.sid,
			aid: this.tempItem.aid
		}))
    },
    startMessageInfo () {
		this.$push('/pages/ask/LeaveMessageInfo?scenicId=' + this.tempItem.sid + '&aid=' + this.tempItem.aid)
    }
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
.l-m-item-container
	.l-q-card
		boxShadow()
		margin rem(.2)
		padding rem(.2)
		border-radius rem(.1)
		.l-q-title-container
			& text:nth-child(1)
				color #333333
				font-size rem(.32)
			& text:nth-child(2)
				color #aaaaaa
				font-size rem(.28)
				float right
		.l-q-content-container
			display flex
			align-items center
			& text:nth-child(1)
				tagWrapper($primary)
			& text:nth-child(2)
				color #555555
				font-size rem(.3)
				line-height rem(.45)
		.l-q-no-reply
			margin-top rem(.2)
			color #aaaaaa
			margin-left rem(.4)
			line-height rem(.45)
		.l-q-content-r-container
			margin-top rem(.3)
			display flex
			align-items center
			& text:nth-child(1)
				tagWrapper(#EA741F)
			& text:nth-child(2)
				color #aaaaaa
				font-size rem(.25)
				line-height rem(.45)
		.l-q-footer-container
			margin-top rem(.3)
			padding-left rem(.4)
			overflow hidden
			display flex
			justify-content space-between
			align-items center
			.l-q-footer-time
				color #D0D0D0
				font-size rem(.25)
			.l-q-footer
				color $primary
				font-size rem(.25)
		.report-wrapper
			overflow hidden
			padding rem(.1) 0
			text-align right
			.report
				border-radius rem(.3)
				border 1px solid #eee
				padding rem(.05) rem(.2)
				textStyle(#888, .25)
</style>
