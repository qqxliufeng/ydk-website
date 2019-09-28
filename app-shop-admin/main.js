import Vue from 'vue'
import App from './App'
import utils from './utils/utils'
import router from './utils/router'
import * as urlPath from './utils/urlPath'

import './static/iconfont.css'
import './static/reset.css'
import uniLoadMore from '@/componets/uni/uni-load-more.vue'
import RouteParams from '@/mixin/RouteParams'
import userInfo from '@/data/UserInfo'

Vue.component('LoadMore', uniLoadMore)
Vue.mixin(RouteParams)
Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.$mRouter = router
Vue.prototype.$urlPath = urlPath
Vue.prototype.$userInfo = userInfo
Vue.prototype.$ids = {
	identity: uni.getStorageSync('identity') || 2,
	storeId: uni.getStorageSync('storeId') || 2
}
Vue.prototype.$http = function (url, params = {}, loadingTip, onRequestSuccess, onRequestFail, onRequestComplete) {
	if (loadingTip !== null) {
		uni.showLoading({
			title: loadingTip || '正在加载…'
		})
	}
	if (userInfo.isLogin()) {
		params.token = userInfo.getToken()
	}
	uni.request({
		header:{
			'content-type': 'application/x-www-form-urlencoded'
		},
		url: urlPath.baseUrl + url,
		data: params,
		method: 'POST',
		success: (res) => {
			if (res && res.statusCode === 200) {
				if (res.data.code === 1) {
					onRequestSuccess(res.data)
				} else {
					onRequestFail(0, res.data.msg)
				}
			} else {
				onRequestFail(500, '请求失败')
			}
		},
		fail: () => {
			onRequestFail()
		},
		complete: () => {
			if (onRequestComplete) {
				onRequestComplete()
			}
			if (loadingTip !== null) {
				uni.hideLoading()
			}
		}
	})
}
Vue.prototype.$toast = function (msg) {
	if (msg) {
		this.$nextTick(() => {
			uni.showToast({
				icon: "none",
				title:msg,
				duration: 2000
			})
		})
	}
}
Vue.prototype.$push = function(url) {
	if (url) {
		if (router.auth(url)) {
			auth()
		} else {
			uni.navigateTo({
				url: url
			})
		}
	} else {
		uni.reLaunch({
			url: '/pages/index/index.vue'
		})
	}
}

Vue.prototype.$replace = function (url) {
	if (url) {
		if (router.auth(url)) {
			auth()
		} else {
			uni.redirectTo({
				url: url
			})
		}
	} else {
		uni.reLaunch({
			url: '/pages/index/index.vue'
		})
	}
}

function auth () {
}

Vue.prototype.$back = function (delta) {
	if (delta) {
		uni.navigateBack({
			delta:delta
		})
	} else {
		uni.navigateBack()
	}
} 

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
