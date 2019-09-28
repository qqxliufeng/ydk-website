function filter(str) { // 特殊字符转义
  str += ''; // 隐式转换
  str = str.replace(/%/g, '%25');
  str = str.replace(/\+/g, '%2B');
  str = str.replace(/ /g, '%20');
  str = str.replace(/\//g, '%2F');
  str = str.replace(/\?/g, '%3F');
  str = str.replace(/&/g, '%26');
  str = str.replace(/\=/g, '%3D');
  str = str.replace(/#/g, '%23');
  return str;
}

function formateObjToParamStr(paramObj) {
  const sdata = [];
  for (let attr in paramObj) {
    sdata.push(`${attr}=${filter(paramObj[attr])}`);
  }
  return sdata.join('&');
}
export default {
	auth: function (url) {
		return url.indexOf('auth') !== -1
	},
	login (backPage) {
		if (backPage) {
			getApp().globalData.backPage = backPage
		} else {
			getApp().globalData.backPage = null
		}
		uni.navigateTo({
			url: '/pages/login/Login'
		})
	},
	splash (param) {
		return '/pages/index/Splash?' + formateObjToParamStr(param)
	},
 	homeCustomService: '/pages/custom/CustomService',
	scenicList: (params) => {
		if (params) {
			return '/pages/scenic/ScenicList?' + formateObjToParamStr(params)
		}
		return '/pages/scenic/ScenicList'
	},
	scenicDetail: (params) => {
		if (params) {
			return '/pages/scenic/ScenicDetail?' + formateObjToParamStr(params)
		}
		return '/pages/scenic/ScenicDetail'
	},
	ticketDetail: (params) => {
		if (params) {
			return '/pages/scenic/TicketDetail?' + formateObjToParamStr(params) 
		} else {
			return '/pages/scenic/TicketDetail'
		}
	},
	scenicInfo: (params) => {
		if (params) {
			console.log(params);
			return '/pages/scenic/ScenicInfo?' + formateObjToParamStr(params)
		}
		return '/pages/scenic/ScenicInfo'
	},
	orderInfo: (params) => {
		if (params) {
			return '/pages/order/OrderInfo?' + formateObjToParamStr(params)
		}
		return '/pages/order/OrderInfo'
	},
	askQustion (params) {
		if (params) {
			return '/pages/ask/AskMessage?' + formateObjToParamStr(params)
		} else {
			return '/pages/ask/AskMessage'
		}
	},
	replyMessage (params) {
		if (params) {
			return '/pages/ask/ReplyMessage?' + formateObjToParamStr(params) 
		} else {
			return '/pages/ask/ReplyMessage'
		}
	},
	reseveDetail (params) {
		if (params) {
			return '/pages/reseve/ReseveDetail?' + formateObjToParamStr(params)
		} else {
			return '/pages/reseve/ReseveDetail'
		}
	},
	orderInfoPay (params) {
		return '/pages/order/OrderInfoPay?' + formateObjToParamStr(params) 
	},
	orderRefund (params) {
		return '/pages/order/OrderInfoBackMoney?' + formateObjToParamStr(params)
	},
	orderComment (params) {
		return '/pages/comment/OrderComment?' + formateObjToParamStr(params)
	},
	activityDetail (params) {
		return '/pages/scenic/ActivityTicketDetail?' + formateObjToParamStr(params)
	},
	invitedDetail (params) {
		return '/pages/scenic/InvitedTicketDetail?' + formateObjToParamStr(params)
	},
	shareActivityImage (pareams) {
		return '/pages/activity/ShareActivityImage?' + formateObjToParamStr(pareams)
	}
}