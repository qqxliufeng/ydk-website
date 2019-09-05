<template>
	<view class="home-header-container">
		<view :style="{opacity: opacity}" class="header-bg"></view>
		<view class="header-content">
			<text class="city" :style="{ color: textColor }" @click="citySelect">{{currentCity}}<text class="iconfont">&#xe63d;</text></text>
			<view class="search" @click="search">搜索景点、关键字</view>
			<text class="iconfont mine" :style="{ color: textColor }" @click="switchMine">&#xe8a0;</text>
		</view>
		<mpvue-picker 
			ref="mpvuePicker" 
			mode="multiLinkageSelector" 
			deepLength="2" 
			:pickerValueDefault="pickerValueDefault" 
			@onConfirm="onConfirm"
			:pickerValueArray="pickerValueArray">
		</mpvue-picker>
	</view>
</template>

<script>
import cityData from '@/componets/uni/city/city-data/city.data.js'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
export default {
	name: 'indexHeader',
	props:{
		scrollTop: {
			type: Number,
			default: 0
		},
		currentCity: {
			type: String,
			default: '济南市'
		}
	},
	components:{
		mpvuePicker
	},
	watch: {
		scrollTop (newVal, oldVal) {
			if (newVal > 0) {
				this.opacity = Math.min(1, newVal / 140)
			} else {
				this.opacity = 0
			}
		}
	},
	computed: {
		textColor () {
			return this.scrollTop === 0 ? '#fff' : '#333'
		}
	},
	data() {
		return {
			opacity: 0,
			pickerValueDefault: [0, 0],
            pickerValueArray:cityData
		}
	},
	methods: {
		search () {
			uni.navigateTo({
				url: '/pages/search/Search'
			})
		},
		citySelect () {
			this.$refs.mpvuePicker.show()
		},
		onConfirm (data) {
			this.$emit('selectedCity', data)
		},
		switchMine () {
			uni.switchTab({
				url: '/pages/mine/index'
			})
		}
	}
}
</script>

<style scoped lang="scss">
	.home-header-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: $header-height;
		z-index: 10;
		.header-bg{
			background-color: #f5f5f5;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
		.header-content {
			display: flex;
			flex-direction: row;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			.city {
				color: #333;
				font-size: $uni-font-size-base;
				margin: 0 10rpx;
				max-width: 200rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.search {
				background-color: #dddddd;
				opacity: 0.5;
				flex: 1;
				height: $header-height - 20rpx;
				border-radius: 10rpx;
				text-align: center;
				font-size: 24rpx;
				color: #888;
				line-height: $header-height - 20rpx;
			}
			.mine {
				color: #333;
				font-size: $uni-font-size-lg * 1.2;
				margin: 0 15rpx
			}
		}
	}
</style>
