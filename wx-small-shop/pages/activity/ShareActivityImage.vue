<template>
  <view class='share-activity-image-container'>
    <view class="save-img">
      <image class="bg-img" src="../../static/img_share_activity_bg.png"></image>
      <view class="share-message-wrapper"></view>
      <view class='share-content-container'>
        <view class="code-wrapper">
          <uni-qrcode
			ref="qrcode"
          	:val="shareUrl" 
          	foreground="#000000"
          	pdground="#000000"
          ></uni-qrcode>
        </view>
        <button open-type="share" class="save-button">立即分享</button>
      </view>
    </view>
  </view>
</template>

<script>
import uniQrcode from '@/componets/uni/qrcode/tki-qrcode.vue'
export default {
  name: 'shareActivityImage',
  data () {
    return {
      postUrl: '',
      shareUrl: ''
    }
  },
  components:{
	  uniQrcode
  },
  methods: {
    createCode () {
      QRCode.toCanvas(this.$refs['qrcode'], this.shareUrl, error => {
        console.log(error)
      })
    },
    getData () {
      this.$http(this.$urlPath.getWxQrCode, {
        i: this.$ids.identity,
        t: this.$ids.storeId,
        s: this.$routeParams.s,
        p: this.$routeParams.p,
        uid: this.$routeParams.uid,
        g: this.$routeParams.g
      }, '', (res) => {
        this.shareUrl = res.data
		this.$nextTick(() => {
			this.$refs.qrcode._makeCode()
			uni.showShareMenu({
				withShareTicket: true
			})
		})
      }, () => {})
    }
  },
  onLoad () {
    this.getData()
  },
  onShareAppMessage() {
  	return {
		path: this.$mRouter.splash({ page: 'itdetail' ,s: this.$routeParams.s, g: this.$routeParams.g, p: this.$routeParams.p, uid: this.$routeParams.uid, i: this.$ids.identity, t: this.$ids.storeId }),
		title: '我正在参加助力活动',
		imageUrl: 'https://www.liuyiqinzi.com/uploads/20190822/01870204be3cc43c5793cbcdeb706c82.jpg'
	}
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.share-activity-image-container
	.share-message-wrapper
		height rem(2)
	.save-img
		height 100vh
		position relative
		.bg-img
			position absolute
			top 0
			left 0
			width 100%
			height 100%
		.share-content-container
			margin rem(.5)
			border-radius rem(.08)
			padding rem(.2)
			position relative
			z-index 1
			.title
				text-indent rem(.4)
				line-height rem(.5)
				textStyle(#333, .35)
			.code-wrapper
				text-align center
				margin 0 auto
				margin-top rem(3)
				padding rem(.2)
				background-color #FFFFFF
				width rem(2.1)
				height rem(2.1)
				display flex
				justify-content center
				align-items center
				.code-tip
					textStyle(#888, .25)
			.save-button
				text-align center
				background-color $orangeColor
				line-height rem(.62)
				border-radius rem(.5)
				display block
				width 70%
				margin 0 auto
				font-size rem(.3)
				baseTextStyle(#fff)
				position fixed
				bottom rem(1)
				left 0
				right 0
			.share-img-post-wrapper
				width 100%
				& image
					width 100%
					height 100%
</style>
