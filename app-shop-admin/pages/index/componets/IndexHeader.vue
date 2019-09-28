<template>
	<view class="home-header-container">
		<view class="header-bg"></view>
		<view class="header-content">
			<text class="city" @click="citySelect">{{currentCity}}<text class="iconfont">&#xe63d;</text></text>
			<view class="search" @click="search">搜索景点、关键字</view>
			<text class="iconfont mine" @click="switchMine">&#xe8a0;</text>
		</view>
		<uni-popup type="top" ref="citys" minHeight="220px">
			<view class="city-wrapper">
				<view  v-for="(item, index) of citys" class="city-item" :key="item.id">
					<text :class="{'select-city-item': item.isSelected}" @click="cityItemClick(item)">
						{{item.name}}
					</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import cityData from '@/componets/uni/city/city-data/city.data.js'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
import uniPopup from '@/componets/uni/popup/uni-popup.vue'
export default {
	name: 'indexHeader',
	props:{
		currentCity: {
			type: String,
			default: '济南市'
		},
		citys: Array
	},
	components:{
		mpvuePicker,
		uniPopup
	},
	methods: {
		search () {
			uni.navigateTo({
				url: '/pages/search/Search'
			})
		},
		citySelect () {
			this.$refs.citys.open()
		},
		switchMine () {
			uni.switchTab({
				url: '/pages/mine/index'
			})
		},
		cityItemClick (item) {
			this.$refs.citys.close()
			if (item.isSelected) {
				return
			}
			this.$emit('selectedCity', item)
			this.citys.forEach(it => {
				it.isSelected = item === it
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
		.city-wrapper{
			border-radius: 10rpx;
			.city-item {
				display: inline-block;
				width: 25%;
				text-align: center;
				margin: 20rpx 0;
				& text{
					background-color: #f5f5f5;
					border-radius: 30rpx;
					color: #333333;
					font-size: $uni-font-size-base;
					padding: 10rpx 30rpx;
					text-align: center;
				}
				& .select-city-item{
					color: #fff;
					background-color: #F0AD4E;
				}
			}
		}
	}
</style>
