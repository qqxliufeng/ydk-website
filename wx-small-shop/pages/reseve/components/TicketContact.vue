<template>
  <view class='t-c-container'>
    <p class="title">游客信息<text>(需要提供<text class="num">1</text>位游客信息)</text></p>
    <view class="user-info-container" v-if="visitorInfo.indexOf('n') !== -1">
      <text>姓&nbsp;&nbsp;&nbsp;名：</text>
      <input type="text" maxlength="6" placeholder="请输入(1)位游客姓名" v-model="tempUserInfo.name">
    </view>
    <view class="user-info-container" v-if="visitorInfo.indexOf('m') !== -1">
      <text>手机号：</text>
      <input type="number" maxlength="11" placeholder="用于接受短信凭证" v-model="tempUserInfo.phone" style="letter-spacing: .02rem">
    </view>
    <view class="user-info-container"  v-if="visitorInfo.indexOf('id') !== -1">
      <text>身份证号：</text>
      <input type="text" placeholder="请输入身份证号" v-model="tempUserInfo.idCard" maxlength="18">
    </view>
    <view class="user-info-container"  v-if="visitorInfo.indexOf('u') !== -1">
      <text>学校名称：</text>
      <input type="text" placeholder="请输入学校名称" v-model="tempUserInfo.schoolName" maxlength="15">
    </view>
    <view class="user-info-container" v-if="visitorInfo.indexOf('s') !== -1">
      <text>学生证号：</text>
      <input type="text" placeholder="请输入学生证号" v-model="tempUserInfo.studentId" maxlength="20">
    </view>
  </view>
</template>

<script>
export default {
  name: 'ticketContact',
  props: {
    visitorInfo: String
  },
  data () {
    return {
      tempUserInfo: {
        name: '',
        phone: '',
        idCard: '',
        schoolName: '',
        studentId: ''
      },
      disabled: false
    }
  },
  methods: {
    clearUserInfo () {
      this.tempUserInfo.name = null
      this.tempUserInfo.phone = this.$root.userInfo.state.phone || ''
      this.tempUserInfo.idCard = null
      this.tempUserInfo.schoolName = null
      this.tempUserInfo.studentId = null
      this.tempUserInfo.code = null
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.t-c-container
	border-top rem(.2) solid #f5f5f5
	.title
		textStyle(#333, .3)
		padding rem(.3)
		borderBottom()
		& > text
			font-size rem(.25)
			color #888
			.num
				textStyle(#ffad2c, .25)
				margin 0 rem(.1)
				font-weight bold
	.user-info-container
		padding rem(.2) rem(.3)
		display flex
		align-items center
		& text
			color #666
			font-size rem(.26)
		& input
			flex 1
			background #f9f9f9
			padding rem(.12)
			font-size rem(.3)
		.get-code
			margin-left rem(.3)
			min-width rem(1.6)
	.modal
		position fixed
		top 0
		bottom 0
		left 0
		right 0
		opacity .5
		background-color #000
		z-index 1001
</style>
