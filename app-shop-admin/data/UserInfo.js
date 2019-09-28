let userInfo = uni.getStorageSync('userInfo')
if (!userInfo) {
	userInfo = {
		id: null,
		realname: null,
		email: null,
		mobile: null,
		qq: null,
		gender: null,
		avatar: null,
		username: null,
		phone: null,
		provice: null,
		town: null,
		city: null,
		openid: null,
	}
}
let token = uni.getStorageSync('token')
export default {
	state: userInfo,
	saveUserInfo (data) {
		uni.setStorageSync('userInfo', data)
		if (data.token) {
			uni.setStorageSync('token', data.token)
			token = data.token
		}
		userInfo = data
		this.state = userInfo
		this.state.id = userInfo.id
		uni.$emit('userInfo')
	},
	clearUserInfo () {
		this.state = {
			id: null,
			realname: null,
			email: null,
			mobile: null,
			qq: null,
			gender: null,
			avatar: null,
			username: null,
			phone: null,
			provice: null,
			town: null,
			city: null,
			openid: null,
		}
		uni.removeStorageSync('userInfo')
		uni.removeStorageSync('token')
	},
	isLogin () {
		return this.state.id
	},
	getToken () {
		return token
	}
}
