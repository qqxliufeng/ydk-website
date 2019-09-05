export default {
	onLoad () {
		uni.$on('orderUpdate', () => {
			this.isUpdate = true
		})
		uni.$once('userInfo', () => {
			this.isLogin = this.$userInfo.isLogin()
			if (this.onLogin) {
				this.onLogin()
			}
		})
	},
	onUnload () {
		uni.$off('orderUpdate', () => {
			console.log('移除了监听器');
		})
	},
	onShow () {
		if (this.isUpdate) {
			uni.startPullDownRefresh()
			this.isUpdate = false
			if (this.onRefresh) {
				this.onRefresh()
			}
		}
	},
	data () {
		return {
			isUpdate: false,
			isLogin: this.$userInfo.isLogin()
		}
	}
}