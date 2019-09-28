<template>
	<view class="feed-back-complete-container">
		<view class="icon-wrapper">
			<icon type="success" class="icon" size="65"></icon>
		</view>
		<view class="title">
			感谢您的反馈
		</view>
		<view class="sub-title">
			感谢您提出的宝贵意见，我们会用心倾听并持续改进产品，争取为您带来更好的体验
		</view>
		<button type="warn" size="mini" @click="submit" class="submit">确认</button>
	</view>
</template>

<script>
export default{
	name: 'feedBackComplete',
	methods: {
		submit () {
			this.$back()
		}
	}
}
</script>

<style scoped lang="scss">
.feed-back-complete-container{
	background-color: #f5f5f5;
	height: 100vh;
	.icon-wrapper{
		padding-top: 10%;
		text-align: center;
	}
	.title{
		font-size: 30rpx;
		color: #333;
		margin-top: 10%;
		text-align: center;
	}
	.sub-title{
		font-size: 24rpx;
		color: #888;
		text-align: center;
		width: 80%;
		margin: 0 auto;
		margin-top: 10%;
	}
	.submit{
		display: block;
		width: 80%;
		margin: 0 auto;
		margin-top: 10%;
		line-height: 80rpx;
		font-size: 32rpx;
	}
}
</style>
