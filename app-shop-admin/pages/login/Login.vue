<template>
	<view class="login-container">
		<button type="primary" class="login-button" open-type="getUserInfo" @getuserinfo="login">
			微信一键登录
		</button>
		<view class="system-info-wrapper">
			<technology-support></technology-support>
		</view>
		<image src="../../static/img_login_yunduo_icon.png" class="yunduo"></image>
	</view>
</template>

<script>
import TechnologySupport from '@/componets/TechnologySupport.vue'
export default {
	name: 'login',
	components: {
		TechnologySupport
	},
	data() {
		return {
			tabUrls: [
				'/pages/mine/index',
				'/pages/order/OrderAllList'
			]
		}
	},
	methods: {
		login () {
			uni.login({
				provider: 'weixin',
				success: (loginData) => {
					uni.getUserInfo({
						provider: "weixin",
						fail(error) {
							this.$toast('微信登录失败')
						},
						success: (res) => {
							this.$http(this.$urlPath.wxLogin, {
								code: loginData.code,
								userInfo: JSON.stringify(res.userInfo)
							}, '正在登录…', (data) => {
								let info = data.data.userinfo
								this.$userInfo.saveUserInfo(info)
								let backPage = getApp().globalData.backPage
								if (backPage) {
									if (this.tabUrls.includes(backPage)) {
										uni.switchTab({
											complete: () => {
												getApp().globalData.backPage = null
											},
											url: backPage
										})
									} else {
										uni.redirectTo({
											complete: () => {
												getApp().globalData.backPage = null
											},
											url: backPage
										})
									}
								} else {
									this.$back()
								}
							}, (code, msg) => {
								this.$toast(msg)
							})
						}
					})
				}
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.login-container
	position relative
	height 100vh
	display flex
	justify-content center
	align-items center
	background-image url('../../static/img-login-bg.png')
	background-repeat repeat
	.login-button
		width 70%
		height rem(.8)
		font-size rem(.3)
		color #ffffff
	.system-info-wrapper
		position fixed
		bottom 0
		left 0
		right 0
		text-align center
		padding rem(.3)
		smTextStyle(#888)
	.yunduo
		position absolute
		top 10%
		left 10%
		width rem(2)
		height rem(2)
</style>
