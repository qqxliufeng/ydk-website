export default {
	data () {
		return {
			page: {
				num: 1,
				pageSize: 10
			},
			list: [],
			loadingType: 'loading'
		}
	},
	methods: {
		loadSuccess (data) {
			if (data === null || data.length === 0) {
				if (this.page.num === 1) {
					this.list = []
				}
				this.loadingType = 'noMore'
			} else {
				if (this.page.num === 1) {
					this.list = data
				} else {
					this.list = this.list.concat(data)
				}
				if (data.length < this.page.pageSize) {
					this.loadingType = 'noMore'
				} else {
					this.loadingType = 'more'
				}
			}
		},
		loadFail () {
			if (this.page.num === 1) {
				this.list = []
			}
			this.loadingType = 'noMore'
			this.$toast('数据加载失败…')
		}
	},
	onPullDownRefresh () {
		this.page.num = 1
		this.getData()
	},
	onReachBottom () {
		if (this.loadingType === 'noMore') {
			return
		}
		this.page.num = this.page.num + 1
		this.loadingType = 'loading'
		this.getData()
	}
}