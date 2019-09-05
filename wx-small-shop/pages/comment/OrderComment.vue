<template>
    <view>
        <view class="o-i-comment-container">
            <view class="o-i-comment-container-start-wrapper">
                <text class="black-text-style">星级评价</text>
				<view class="rate-wrapper">
					<rate @change="rateChange" :showRate="false" :value="rate"></rate>
					<text class="rate-value">{{rate}}分</text>
				</view>
            </view>
            <p class="black-text-style">文字评价</p>
            <view class="o-i-comment-content-wrapper">
                <textarea placeholder="请输入评论内容" :rows="7" v-model="content" maxLength="200"></textarea>
            </view>
             <p class="black-text-style">上传图片<text>最多三张</text></p>
             <view class="o-i-comment-upload-wrapper">
               <upload-img :upImgConfig="unImgConfig" @onUpImg="onUpImage" @onImgDel="onImgDel"></upload-img>
            </view>
            <view>
                <button type="primary" class="o-i-comment-submit" @click="upload">确定</button>
            </view>
        </view>
    </view>
</template>

<script>
import Rate from '@/componets/uni/rate/uni-rate.vue'
import UploadImg from '@/componets/uni/upload/sunui-upimg-basic.vue'
export default {
  name: 'orderComment',
  data () {
    return {
      rate: 5,
      imageList: [],
      content: '',
	  unImgConfig: {
		  count: 3,
		  notli: true,
		  basicConfig: {
			  url: this.$urlPath.imageActionUrl + '?token=' + this.$userInfo.getToken()
		  }
	  },
	  imageList: []
    }
  },
  components: {
	  Rate,
	  UploadImg
  },
  methods: {
    upload () {
		const imagePaths = this.imageList.map((item)=>{
			return item.path_server
		})
		if (!this.content) {
			this.$toast('请输入评论内容')
			return
		}
		if (this.content.length > 200) {
			this.$toast('评论内容最多200字')
			return
		}
		this.$http(this.$urlPath.addCommentUrl, {
			ord_id: this.$routeParams.orderId,
			mark: this.rate,
			content: this.content,
			images: imagePaths.join(',')
		}, '正在上传…', (data) => {
			this.$toast('评论发表成功')
			uni.$emit('orderUpdate')
			this.$back()
		}, (errorCode, error) => {
			this.$toast(error)
		})
	},
	onUpImage (files) {
		this.imageList = files
	},
	onImgDel (deleteItem) {
		this.imageList.splice(deleteItem.index, 1)
	},
	rateChange (val) {
		this.rate = val.value
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.black-text-style
	color #333
	font-size rem(.32)
.o-i-comment-container
	margin-top $headerHeight
	.o-i-comment-container-start-wrapper
		padding rem(.3)
		line-height rem(.5)
		font-size rem(.5)
		.o-i-comment-container-start
			display inline-block
			margin-left rem(.3)
		.rate-wrapper
			display flex
			justify-content left
			align-items center
			.rate-value
				margin-left rem(.1)
				baseTextStyle($orangeColor)
				margin-top rem(.02)
	& > p
		padding rem(.3)
		& text
			margin-left rem(.3)
			font-size rem(.28)
			color #888
	.o-i-comment-content-wrapper
		margin 0 rem(.3)
		& textarea
			background-color #f5f5f5
			display block
			width 100%
			padding rem(.2)
			font-size rpx($uni-font-size-base)
			box-sizing border-box
	.o-i-comment-upload-wrapper
		.o-i-comment-upload-item
			margin rem(.3)
			border-radius: 6px
			position: relative
			overflow: hidden
			box-sizing border-box
			.o-i-comment-upload-progress
				position absolute
				top 0
				left 0
				margin-top rem(.1)
				margin-left rem(.1)
				color $primary
			.o-i-comment-upload-add-icon
				color: #8c939d
				text-align: center
				line-height rem(1.8)
				font-size rem(.8)
			& image
				width 100%
				height 100%
				object-fit cover
	.o-i-comment-submit
		width 85%
		display block
		margin rem(1) auto
</style>
