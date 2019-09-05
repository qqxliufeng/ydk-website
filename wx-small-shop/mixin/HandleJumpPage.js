export default {
	methods: {
		jumpPage () {
			const params = getApp().globalData.routeParams
			if (params) {
				setTimeout(() => {
					const jumpPageInfo = params
					const page = jumpPageInfo.page
					if (page) {
						let pageUrl = ''
						switch (page) {
							// page=index&identity=XX&storeId=XX
							case 'index':
								pageUrl = null
								break
							case 'scenicdetail':
							// page=scenicdetail&identity=XX&storeId=XX&scenicId=XX
								pageUrl = this.$mRouter.scenicDetail(jumpPageInfo)
								break
							case 'ticketdetail':
							// page=ticketdetail&identity=XX&storeId=XX&scenicId=XX&&goodsId=XX
								pageUrl = this.$mRouter.ticketDetail(jumpPageInfo)
								break
							case 'atdetail':
							// page=atdetail&identity=XX&storeId=XX&s=XX&&g=XX&p=XX
								pageUrl = this.$mRouter.activityDetail(jumpPageInfo)
								break
							case 'itdetail':
							// page=itdetail&identity=XX&storeId=XX&s=XX&&g=XX&p=XX&uid=XX
								pageUrl = this.$mRouter.invitedDetail(jumpPageInfo)
								break
						}
						if (pageUrl) {
							uni.navigateTo({
								url: pageUrl,
								complete: () => {
									getApp().globalData.routeParams = null
								}
							})
						}
					}
				}, 500)
			}
		}
	}
}