<template>
	<view>
		<view v-for="(item,index) of list" :key="index" class="l-q-card">
			<view class="l-q-content-container">
				<text>问</text>
				<text>{{item.content}}</text>
			</view>
			<view class="l-q-no-reply" v-if="!item.answer">
				很遗憾暂时还没有人回复您的问题呢，请耐心等待哦~
			</view>
			<view v-else class="l-q-content-r-container">
				<text>答</text>
				<text>{{item.answer.answer_text}}</text>
			</view>
			<view class="l-q-footer-container" v-if="item.answer">
				<text class="iconfont">&#xe790; {{item.answer.create_time}}</text>
				<text @click="startMessageInfo(item)">查看其它答案</text>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
	</view>
</template>
<script>
import ListMixin from '@/mixin/List.js'
export default {
	name: 'question',
	mixins: [ListMixin],
	methods: {
		getData () {
			this.$http(this.$urlPath.myAskUrl, {
				page: this.page.num
			}, null, (data) => {
				this.loadSuccess(data.data)
			}, (errorCode, error) => {
				this.loadFail()
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		startMessageInfo (item) {
			this.$push('/pages/ask/LeaveMessageInfo?scenicId=' + item.sid + '&aid=' + item.aid)
		},
		onRefresh () {
			this.getData()
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.l-q-card
	margin rem(.2)
	border #F5F5F5 solid 1px
	padding rem(.2)
	border-radius rem(.1)
	boxShadow()
	.l-q-title-container
		borderBottom()
		padding-bottom rem(.2)
		& text:nth-child(1)
			color #333333
			font-size rem(.32)
		& text:nth-child(2)
			color #aaaaaa
			font-size rem(.28)
			float right
	.l-q-content-container
		margin-top rem(.3)
		display flex
		align-items center
		align-items flex-start
		& text:nth-child(1)
			color #ffffff
			font-size rem(.2)
			background-color $primary
			border-radius rem(.08)
			padding rem(.05)
			width rem(.25)
			height rem(.25)
			margin-right rem(.1)
			line-height rem(.28)
			text-align center
		& text:nth-child(2)
			flex 1
			color #555555
			font-size rem(.3)
			line-height rem(.45)
	.l-q-no-reply
		margin-top rem(.2)
		color #aaaaaa
		margin-left rem(.4)
		line-height rem(.45)
		font-size rem(.24)
	.l-q-content-r-container
		margin-top rem(.3)
		display flex
		align-items center
		align-items flex-start
		& text:nth-child(1)
			color #ffffff
			font-size rem(.2)
			background-color $orangeColor
			border-radius rem(.08)
			padding rem(.05)
			width rem(.25)
			height rem(.25)
			margin-right rem(.1)
			line-height rem(.28)
			text-align center
		& text:nth-child(2)
			flex 1
			color #555555
			font-size rem(.3)
			line-height rem(.45)
	.l-q-footer-container
		display flex
		justify-content space-between
		margin-top rem(.3)
		padding-left rem(.4)
		& text:nth-child(1)
			color #D0D0D0
			font-size rem(.25)
		& text:nth-child(2)
			color $primary
			font-size rem(.25)
</style>
