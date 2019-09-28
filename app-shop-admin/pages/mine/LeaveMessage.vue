<template>
	<view>
        <uni-segement-control  :current="mCurrent" :values="['我的问题','我的回复']" styleType="text" activeColor="#64BBAE" @clickItem="itemClick"></uni-segement-control>
		<view class="content">
			<view v-show="mCurrent === 0">
				<my-question ref="myAsk"></my-question>
			</view>
			<view v-show="mCurrent === 1">
				<my-reply ref="myAnswer"></my-reply>
			</view>
		</view>
    </view>
</template>
<script>
import myQuestion from '@/pages/ask/components/MyQuestion.vue'
import myReply from '@/pages/ask/components/MyReply.vue'
import uniSegementControl from '@/componets/uni/uni-segmented-control.vue'
export default {
	name: 'LeaveMessage',
	components: {
		uniSegementControl,
		myQuestion,
		myReply
	},
	data() {
	return {
		mCurrent: 0
	}
	},
	methods: {
		itemClick (item) {
			this.mCurrent = item
			uni.startPullDownRefresh()
		}
	},
	onLoad() {
		uni.startPullDownRefresh()
	},
	onPullDownRefresh() {
		if (this.mCurrent === 0) {
			this.$refs.myAsk.onRefresh()
		} else {
			this.$refs.myAnswer.onRefresh()
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.content
	margin-top rem($headerHeight)
	padding-top rem(.1)
</style>
