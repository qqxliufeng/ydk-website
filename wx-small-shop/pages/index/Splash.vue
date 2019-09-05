<template>
	<view class="splash-wrapper">
		<view class="uni-load-more__img">
		  <view class="load1 load">
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		  </view>
		  <view class="load2 load">
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		  </view>
		  <view class="load3 load">
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		    <view
		      class="uni-load-view_wrapper" />
		  </view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'splash',
		onLoad () {
			if(this.$routeParams && Object.keys(this.$routeParams).length > 0) {
				getApp().globalData.routeParams = this.$routeParams
				if (this.$routeParams.identity && this.$routeParams.storeId) {
					uni.setStorageSync('identity', this.$routeParams.identity || '2')
					uni.setStorageSync('storeId', this.$routeParams.storeId || '2')
					this.$ids.identity = uni.getStorageSync('identity')
					this.$ids.storeId = uni.getStorageSync('storeId')
				}
			}
			uni.switchTab({
				url: '/pages/index/index'
			})
		}
	}
</script>
<style lang="scss">
.splash-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
}
.uni-load-more {
	display: flex;
	flex-direction: row;
	height: 80upx;
	align-items: center;
	justify-content: center;

	&__text {
		font-size: 28upx;
		color: $uni-text-color-grey;
	}

	&__img {
		height: 28px;
		width: 28px;
		margin-right: 10px;
		& > .load {
			position: absolute;
			.uni-load-view_wrapper {
				width: 6px;
				height: 2px;
				border-top-left-radius: 1px;
				border-bottom-left-radius: 1px;
				background: $uni-text-color-grey;
				position: absolute;
				opacity: 0.2;
				transform-origin: 50%;
				animation: load 1.56s ease infinite;

				&:nth-child(1) {
					transform: rotate(90deg);
					top: 2px;
					left: 9px;
				}

				&:nth-child(2) {
					transform: rotate(180deg);
					top: 11px;
					right: 0px;
				}

				&:nth-child(3) {
					transform: rotate(270deg);
					bottom: 2px;
					left: 9px;
				}

				&:nth-child(4) {
					top: 11px;
					left: 0px;
				}
			}
		}
	}
}

.load1,
.load2,
.load3 {
	height: 24px;
	width: 24px;
}

.load2 {
	transform: rotate(30deg);
}

.load3 {
	transform: rotate(60deg);
}
.load1 .uni-load-view_wrapper:nth-child(1) {
	animation-delay: 0s;
}

.load2 .uni-load-view_wrapper:nth-child(1) {
	animation-delay: 0.13s;
}

.load3 .uni-load-view_wrapper:nth-child(1) {
	animation-delay: 0.26s;
}

.load1 .uni-load-view_wrapper:nth-child(2) {
	animation-delay: 0.39s;
}

.load2 .uni-load-view_wrapper:nth-child(2) {
	animation-delay: 0.52s;
}

.load3 .uni-load-view_wrapper:nth-child(2) {
	animation-delay: 0.65s;
}

.load1 .uni-load-view_wrapper:nth-child(3) {
	animation-delay: 0.78s;
}

.load2 .uni-load-view_wrapper:nth-child(3) {
	animation-delay: 0.91s;
}

.load3 .uni-load-view_wrapper:nth-child(3) {
	animation-delay: 1.04s;
}

.load1 .uni-load-view_wrapper:nth-child(4) {
	animation-delay: 1.17s;
}

.load2 .uni-load-view_wrapper:nth-child(4) {
	animation-delay: 1.3s;
}

.load3 .uni-load-view_wrapper:nth-child(4) {
	animation-delay: 1.43s;
}

@-webkit-keyframes load {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0.2;
	}
}
</style>