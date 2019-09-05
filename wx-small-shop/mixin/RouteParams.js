export default {
	data () {
		return {
			$routeParams: null
		}
	},
	onLoad (params) {
		this.$routeParams = params
	}
}