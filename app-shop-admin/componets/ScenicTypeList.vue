<template>
	<view class="scenic-type-list-container">
		<scroll-view class="scroll-view-h" scroll-x="true" scroll-with-animation :scroll-left="left">
			<view v-for="(item, index) of tempList" :key="index" style="display: inline-block; width: 20%; height: 80%;" :id="item.itemId">
				<view class="h-t-type-wrapper" @click="homeTypeClick(item)">
					<image :src="$utils.image.getImagePath(item.image)" class="h-t-type-icon" :class="{ 'selected-type-image': item.isSelected }"></image>
					<p class="h-t-type-title" :class="{ 'selected-type-text': item.isSelected }">{{item.name}}</p>
				</view>
			</view>
		</scroll-view>
		<view class="more-wrapper" @click="showMore">
			<image src="../static/img_more_icon.png" class="icon"></image>
			<p class="title">更多</p>
		</view>
		<uni-popup type="top" ref='popup'>
			<view v-for="(item, index) of dialogTempList" :key="index" style="display: inline-block; width: 20%; height: 25vw;">
				<view class="type-wrapper" @click="dialogItemClick(item)">
					<image :src="$utils.image.getImagePath(item.image)" class="type-icon" :class="{ 'selected-type-image': item.isSelected }"></image>
					<p class="type-title" :class="{ 'selected-type-text': item.isSelected }">{{item.name}}</p>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/componets/uni/popup/uni-popup.vue'
export default {
	name: 'scenicTypeList',
	props: {
		categoryId: {
			type: String,
			default: '0'
		}
	},
	components: {
		uniPopup
	},
	data () {
		return {
			tempList: [],
			dialogTempList: [],
			left: 0,
			left: 0,
			screenWidth: 0
		}
	},
	methods: {
		showMore () {
			this.$refs.popup.open()
		},
		dialogItemClick (item) {
			this.$refs.popup.close()
			this.homeTypeClick(item)
		},
		homeTypeClick (item) {
			if (!item.name){
				return
			}
			this.tempList.forEach((it, index) => {
				it.isSelected = it === item
				if (it.isSelected) {
					this.$nextTick(() => {
						this.left = this.screenWidth * .2 * index - this.screenWidth * .4
					})
				}
			})
			this.$emit('type-item-click', item)
		},
		slideItems () {
			this.tempList.forEach((item, index) => {
				this.$set(item, 'isSelected', Number(item.id) === Number(this.categoryId))
				this.$set(item, 'itemId', 'item' + index)
			})
			this.tempList.forEach((item, index) => {
				if (item.isSelected) {
					this.$nextTick(() => {
						this.left = this.screenWidth * .2 * index - this.screenWidth * .4
					})
					return
				}
			})
		}
	},
	mounted () {
		uni.getSystemInfo({
			success: (res) => {
				this.screenWidth = res.screenWidth
				this.tempList = getApp().globalData.typeList.concat([])
				this.dialogTempList = getApp().globalData.typeList.concat([])
				this.tempList.push({
					image: '',
					name: ''
				})
				this.slideItems()
			}
		})
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.scenic-type-list-container
	height 20vw
	border-bottom #f5f5f5 solid 1px
	position relative
	overflow hidden
	.type-wrapper
		text-align: center;
		box-sizing: border-box;
		height 100%
		overflow hidden
		display flex
		flex-direction column
		justify-content center
		align-items center
		.type-icon
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			object-fit: cover;
		.type-title
			textStyle(#888, .24);
			margin-top: 2rpx;
		.selected-type-image
			background-color: #f5f5f5;
		.selected-type-text
			color $orangeColor
	.scroll-view-h
		white-space: nowrap;
		width 100%
		height 100%
		.h-t-type-select-wrapper
			border $orangeColor solid 1px
		.h-t-type-wrapper
			text-align: center;
			box-sizing: border-box;
			height 100%
			overflow hidden
			display flex
			flex-direction column
			justify-content center
			align-items center
			.h-t-type-icon
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				object-fit: cover;
			.h-t-type-title
				textStyle(#888, .24);
				margin-top: 2rpx;
			.selected-type-image
				background-color: #f5f5f5;
			.selected-type-text
				color $orangeColor
	.more-wrapper
		height 100%
		position absolute
		top 0
		right 0
		width 18%
		display flex
		flex-direction column
		justify-content center
		align-items center
		boxShadow()
		background-color #fff
		.icon
			width: 70rpx;
			height: 70rpx;
			padding 14rpx
			box-sizing border-box
		.title
			textStyle(#888, .24);
			margin-top: 2rpx;
</style>
