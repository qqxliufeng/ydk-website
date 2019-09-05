<script>
	export default {
		onLaunch: function() {
			uni.login({
				provider: 'weixin',
				success: (loginData) => {
					this.$http(this.$urlPath.wxLogin, {
						code: loginData.code
					}, null, (data) => {
						let info = data.data.userinfo
						this.$userInfo.saveUserInfo(info)
					}, (code, msg) => {
						console.log('自动登录---> ' + msg)
					})
				}
			})
			this.$http(this.$urlPath.reportUrl, {}, null, (data) => {
			  this.$options.globalData.reports = data.data
			}, (errorCode, error) => {
			  console.log('获取失败')
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			backPage: null,
			routeParams: null,
			reports: null
		}
	}
</script>

<style>
	/*每个页面公共css */
	.bg {
		background-color: red;
	}
</style>
