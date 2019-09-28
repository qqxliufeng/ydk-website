<template>
  <view>
    <view class='invitation-friend-info-container'>
    <view class="header">
      <view class="user-info">
        <image :src="$utils.image.getImagePath(inviteruser.wx_headimgurl)"></image>
        <text class="friend-tip">您的好友正在参加助力活动</text>
      </view>
      <text class="action" @click="toJoin">我要参加</text>
    </view>
    <view class="friend-info-wrapper">
      <p class="tip">已邀请<text>{{assist.join.join_number}}</text>位好友为他助力，还需<text>{{assist.number - assist.join.join_number}}</text>位</p>
      <image v-for="(item, index) of assist.join.user" :key="index" :src="$utils.image.getImagePath(item.avatar)"></image>
      <text class="helper" @click="helper">为他助力</text>
    </view>
  </view>
  <view class="s-d-info-middle-wrapper">
      <view class="activity-info-wrapper" @click="ativityRuleInfo">
        <p>活动详情</p>
        <p class="activity-info">{{delHtmlTag(assist.details)}}</p>
      </view>
      <view class="open-time-wrapper">
          <p>营业时间</p>
          <p>{{scenicInfo.open}}</p>
      </view>
      <view class="s-d-info-scenic-location-wrapper">
          <text class="iconfont s-d-info-scenic-location-icon">&#xe850;</text>
          <view class="s-d-info-scenic-location">
              <p>{{scenicInfo.city}}</p>
              <p>{{scenicInfo.tel}}</p>
          </view>
          <text @click="makePhone" class="iconfont s-d-info-scenic-phone">&#xe6a9;</text>
      </view>
    </view>
    <safe-protect></safe-protect>
  </view>
</template>

<script>
export default {
  name: 'activityFriendInfo',
  props: {
    scenicInfo: Object,
    assist: Object,
    inviteruser: Object
  },
  methods: {
    delHtmlTag (str) {
      if (str) {
        return str.replace(/<[^>]+>/g, '')
      } else {
        return ''
      }
    },
    helper () {
      this.$emit('helper')
    },
	toJoin () {
		this.$emit('join')
	},
	makePhone () {
		uni.makePhoneCall({
			phoneNumber: this.scenicInfo.tel
		})
	},
    ativityRuleInfo () {
      this.$emit('ativityRuleInfo')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.invitation-friend-info-container
	border-top #f5f5f5 solid rem(.05)
	border-bottom #f5f5f5 solid rem(.05)
	padding rem(.2)
	.header
		display flex
		justify-content space-between
		align-items center
		.user-info
			textStyle(#333, .3)
			& > image
				width rem(.5)
				height rem(.5)
				border-radius 50%
				margin-right rem(.1)
				vertical-align middle
				object-fit cover
			.friend-tip
				textStyle(#333, .25)
				vertical-align middle
		.action
			textStyle(#fff, .23)
			border-radius rem(.3)
			padding rem(.05) rem(.2)
			line-height rem(.35)
			background $orangeColor
	.friend-info-wrapper
		border #F8D79E solid 1px
		overflow hidden
		margin-top rem(.2)
		padding rem(.1)
		border-radius rem(.08)
		.tip
			textStyle(#666, .2)
			margin-left rem(.1)
			margin-top rem(.1)
			margin-bottom rem(.1)
			& > text
				textStyle($orangeColor, .23)
				margin 0 rem(.1)
		& > image
			object-fit cover
			height rem(.5)
			width rem(.5)
			border-radius 50%
			float left
			margin-left rem(.1)
			margin-top rem(.1)
		.helper
			float right
			textStyle(#fff, .23)
			border-radius rem(.3)
			padding rem(.05) rem(.2)
			line-height rem(.35)
			background $primary
			margin-left rem(.1)
			margin-top rem(.1)
.s-d-info-middle-wrapper
	padding rem(.2)
	overflow hidden
	.s-d-info-scenic-location-wrapper
		margin-top rem(.2)
		textStyle(#333333, .3)
		line-height rem(.45)
		display flex
		align-items center
		.s-d-info-scenic-location
				flex 1
		.s-d-info-scenic-phone
				textStyle($primary, .65)
	.s-d-info-scenic-location-icon
		font-size rem(.4)
		margin-right rem(.2)
		vertical-align top
	.open-time-wrapper
		background-color #f5f5f5
		padding rem(.1)
		margin-top rem(.2)
		border-radius rem(.1)
		& p:nth-child(1)
			textStyle(#333, .28)
		& p:nth-child(2)
			textStyle(#888, .25)
		& p:nth-child(3)
			textStyle(#888, .25)
	.activity-info-wrapper
		margin-top rem(.2)
		textStyle(#333, .3)
		.activity-info
			muitlLineEllipsis(2)
			line-height rem(.32)
			margin-top rem(.2)
			textStyle(#888, .25)
</style>
