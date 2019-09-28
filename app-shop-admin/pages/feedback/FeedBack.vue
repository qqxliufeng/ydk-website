<template>
	<view class="feed-back-container">
		<textarea placeholder="请输入您的宝贵意见，我们将不断优化您的体验(1~200)" maxlength="200" placeholder-class="placeholder" v-model="feedBackConent"></textarea>
		<view class="num">{{numCount}}</view>
		<view class="phone-wrapper">
			<text class="phone-title">联系方式：</text>
			<input placeholder="请输入手机号(必填)" v-model="phone" type="number" class="phone-input" maxlength="11"/>
		</view>
		<view class="title">问题截图（选填，最多上传3张）</view>
		<view class="image-wrapper">
			<view v-for="img of imageList" :key="img" class="image-item-wrapper">
				<image :src="img.imagePath" mode="aspectFill"></image>
				<icon type="cancel" class="clear close-icon" @click="close(img)" color="#666"></icon>
			</view>
			<view class="add-wrapper" v-if="imageList.length < 3" @click="addImage">
				<image src="../../static/img_add_icon.png" mode="aspectFill"></image>
			</view>
		</view>
		<button type="primary" class="submit" size="mini" @click="submit">提交</button>
	</view>
</template>

<script>
export default {
	name: 'feedBack',
	data() {
		return {
			feedBackConent: '',
			numCount: '0/200',
			phone: '',
			imageList: [],
			url: '',
			uploadList: []
		}
	},
	watch: {
		feedBackConent () {
			this.numCount = Math.min(this.feedBackConent.length, 200) + '/' + 200
		}
	},
	methods: {
		addImage () {
			uni.chooseImage({
				count: 3 - this.imageList.length,
				success: (res) => {
					if (res.tempFilePaths && res.tempFilePaths.length > 0) {
						res.tempFilePaths.forEach(it => {
							this.imageList.push({
								imagePath: it,
								isUpload: false
							})
						})
					} 
				}
			})
		},
		close (img) {
			this.imageList.splice(this.imageList.indexOf(img), 1)
		},
		submit () {
			if (!this.feedBackConent) {
				this.$toast('请输入您的宝贵意见')
				return
			}
			if (!this.phone) {
				this.$toast('请输入手机号')
				return
			}
			if (!this.$utils.validator.isPhone(this.phone)) {
				this.$toast('请输入合法的手机号')
				return
			}
			const tempImageList = this.imageList.filter(item => {
				return !item.isUpload
			})
			if (tempImageList && tempImageList.length > 0) {
				uni.showLoading({
					title: '处理中…'
				})
				tempImageList.forEach(item => {
					uni.uploadFile({
						url: this.url,
						name: 'file',
						filePath: item.imagePath,
						success: (res) => {
							item.isUpload = true
							this.uploadList.push(JSON.parse(res.data).data.url)
						},
						complete: () => {
							if (this.uploadList.length === tempImageList.length) {
								uni.hideLoading()
								this.performSubmit()
							}
						}
					})
				})
			} else {
				this.performSubmit()
			}
		},
		performSubmit () {
			const uploadData = {
				content: this.feedBackConent,
				images: this.uploadList.length > 0 ? this.uploadList.join(',') : '',
				mobile: this.phone
			}
			this.$http(this.$urlPath.feedback, {
				params: JSON.stringify(uploadData)
			}, '正在上传', () => {
				this.$replace('/pages/feedback/FeedBackComplete')
			}, (code, error) => {
				this.$toast(error)
			})
		}
	},
	onLoad () {
		this.url = this.$urlPath.imageActionUrl + '?token=' + this.$userInfo.getToken()
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.feed-back-container
	background-color #f5f5f5
	padding rem(.2)
	height 100vh
	.title
		textStyle(#888, .24)
		padding rem(.2)
		background-color #fff
	.num
		textStyle(#666, .24)
		padding rem(.1)
		text-align right
	.phone-wrapper
		background-color #fff
		padding rem(.2)
		margin rem(.2) 0
		display flex
		align-items center
		line-height rem(.5)
		.phone-title
			textStyle(#333, .3)
		.phone-input
			display inline-block
			textStyle(#888, .3)
			flex 1
	& > textarea
		baseTextStyle(#333)
		border 1px solid #f5f5f5
		padding rem(.2)
		width 100%
		padding: rem(.2);
		box-sizing: border-box;
		background-color #FFF
	.placeholder
		baseTextStyle(#888)
	.submit
		display block
		margin-top rem(.5)
		line-height rem(.8)
		font-size 32rpx
	.image-wrapper
		background-color #fff
		padding rem(.2)
		overflow hidden
		display flex
		flex-direction row
		.add-wrapper
			border 1px dashed #CCCCCC
			width 25vw
			height 25vw
			display flex
			box-sizing border-box
			justify-content center
			align-items center
			& > image
				width 50%
				height 50%
		.image-item-wrapper
			width 25vw
			height 25vw
			display inline-block
			margin-right 5vw
			position relative
			& > image
				width 100%
				height 100%
			.clear
				position absolute
				top 0
				right 0
</style>
