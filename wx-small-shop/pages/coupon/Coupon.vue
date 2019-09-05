<template>
	<view>
		<!-- <uni-segement-control :values="['可使用', '已使用', '已过期']"></uni-segement-control>
		<view class="c-tabs">
			<view class="c-tabs-item">
				<coupon-item state="1"></coupon-item>
			</view>
			<view class="c-tabs-item">
				<coupon-item state="2"></coupon-item>
			</view>
			<view class="c-tabs-item">
				<coupon-item state="3"></coupon-item>
			</view>
		</view> -->
		<view class="empty">暂无可用</view>
	</view>
</template>
<script>
import uniSegementControl from '@/componets/uni/uni-segmented-control.vue'
import CouponItem from './components/CouponItem'
export default {
	name: 'coupon',
	components: {
		uniSegementControl,
		CouponItem
	}
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.c-tabs
	margin-top rem($headerHeight)
	padding-top rem(.1)
.empty
	height 100vh
	display flex
	justify-content center
	align-items center
	textStyle(#888, .28)
</style>
