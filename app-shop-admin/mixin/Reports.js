export default {
	data () {
		return {
			selectedItem: null
		}
	},
	computed: {
		pickerValueArray () {
			const reports = getApp().globalData.reports;
			if (reports && reports.constructor === Array) {
				const array = []
				reports.forEach(item => {
					array.push({
						label: item.name,
						value: item.id
					})
				})
				return array
			} else {
				return null
			}
		}
	},
	methods: {
	    doReport (type, ids, cause) {
	      this.$http(this.$urlPath.doReport, {
	        type: type,
	        ids: ids,
	        cause: cause
	      }, '', (data) => {
	        this.$toast('举报成功')
	      }, (errorCode, error) => {
	        this.$toast(error)
	      })
	    }
	  }
}