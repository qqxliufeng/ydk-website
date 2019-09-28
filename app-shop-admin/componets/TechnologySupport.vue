<template>
	<view class="technology-support-container">
		<view>
			技术支持：山东易行旅行社有限公司
		</view>
		<view>
			----联系电话：<text @click="callPhone" class="phone">13395310955</text>----
		</view>
	</view>
</template>

<script>
export default {
	name: 'technologySupport',
	data () {
		return {
			phone: '13395310955'
		}
	},
	methods: {
		callPhone () {
			uni.makePhoneCall({
				phoneNumber: this.phone
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.technology-support-container
	font-size rem(.2)
	text-align center
	color #888
	padding rem(.2)
	.phone
		text-decoration underline
		color $primary
		font-size rem(.2)
</style>
