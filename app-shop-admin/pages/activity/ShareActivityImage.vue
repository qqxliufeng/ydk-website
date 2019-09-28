<template>
  <view class='share-activity-image-container'>
    <view class="save-img">
      <image class="bg-img" :src="$utils.image.getImagePath(bgImage)" v-if="bgImage" mode="aspectFill"></image>
      <view class="share-message-wrapper"></view>
      <view class='share-content-container'>
		<view style="color: #FFFFFF; text-align: center; margin-top: 10%; font-size: 24px; width: 90%; margin-left: auto; margin-right: auto; color: #ffad2c;">购买只差一步</view>
		<view style="color: #FFFFFF; text-align: center; margin-top: 5%; font-size: 20px; width: 90%; margin-left: auto; margin-right: auto;">再邀请
			<text style="font-size: 24px; margin: 0 10rpx; color: #ffad2c;">{{num}}</text>个好友助力</view>
		<view style="color: #FFFFFF; text-align: center; margin-top: 1%; font-size: 20px; width: 90%; margin-left: auto; margin-right: auto;">才能获得
			<text style="color: #ffad2c; font-size: 20px;">购买资格</text></view>
		<view style="color: #FFFFFF; text-align: center; margin-top: 5%; font-size: 30px; width: 90%; margin-left: auto; margin-right: auto;">面对面好友助力</view>
        <view class="code-wrapper">
          <uni-qrcode
			ref="qrcode"
          	:val="shareUrl" 
          	foreground="#000000"
          	pdground="#000000"
			@result="qrCodeResult"
          ></uni-qrcode>
        </view>
		<view style="color: #FFFFFF; text-align: center; margin-top: 5%; font-size: 16px; border-bottom: #CCCCCC solid 1rpx; width: 90%; margin-left: auto; margin-right: auto; padding-bottom: 20rpx;">让好友用微信扫上方二维码助力</view>
		<view style="color: #FFFFFF; text-align: center; margin-top: 5%; font-size: 30px; width: 90%; margin-left: auto; margin-right: auto; padding-bottom: 20rpx;">您还可以</view>
        <button open-type="share" class="save-button" style="font-size: 40rpx;"><text class="iconfont" style="font-size: 60rpx; margin-right: 10rpx; vertical-align: middle;">&#xe610;</text>
		<text style="vertical-align: middle; font-size: 36rpx; ">邀请好友助力</text></button>
      </view>
    </view>
	<!-- <popup-wrapper type="bottom" ref="shareInfoWrapper" transition="slider" width="100%" :height="height + 'px'">
		 <view style="background-color: #ffffff; padding: 20rpx; width: 100%; text-align: center;">
			 <view>
			 	<view class="share_step">1、点击下方的保存图片按钮，将分享图片保存到系统相册</view>
			 	<view class="share_step">2、把保存后的图片，分享给你好友或空间，让好友给你完成邀请助力注册</view>
			 	<view class="share_step">3、好友帮您完成助力任务，可以下单购买优惠产品</view>
			 	<view class="share_step" style="padding-bottom: 10rpx;">4、根据产品说明去商家消费</view>
			 </view>
		 	 <canvas canvas-id="share_img" :style="{'height': (height - 125 - 59) + 'px', 'width': '100%'}" style="position: relative; z-index: 0;"></canvas>
			 <view style="display: flex; padding: 10rpx 0; background-color: #FFFFFF; width: 100%;" v-if="showBottomAction">
			 	<button size="mini"  type="warn" @click="cancel">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>
			 	<button type="primary" size="mini" @click="saveTicketInfoImage">保存图片</button>
			 </view>
		 </view>
	</popup-wrapper> -->
  </view>
</template>

<script>
import uniQrcode from '@/componets/uni/qrcode/tki-qrcode.vue'
import PopupWrapper from '@/componets/uni/lu-popup-wrapper.vue'
export default {
  name: 'shareActivityImage',
  data () {
    return {
      postUrl: '',
      shareUrl: '',
	  openType: '',
	  bgImagePath: null,
	  bgImage: null,
	  height: '380px',
	  qrCodeImagePath: null,
	  showBottomAction: false,
	  title: '我正在参加活动，快来帮我助力吧~',
	  num: 1
    }
  },
  components:{
	  uniQrcode,
	  PopupWrapper
  },
  methods: {
	  qrCodeResult (res) {
		  this.qrCodeImagePath = res
	  },
	  share () {
		  if (this.bgImagePath && this.qrCodeImagePath) {
			  if (this.openType) {
			  	uni.openSetting({
			  		success: (result) => {
			  			if (result.authSetting['scope.writePhotosAlbum']) {
			  				this.openType = null
			  				this.makeCanvas()
			  			}
			  		}
			  	})
			  } else {
			  	uni.authorize({
			  		scope: 'scope.writePhotosAlbum',
			  		success: () => {
			  			this.makeCanvas()
			  		},
			  		fail: (error) => {
			  			this.openType = 'openSetting'
			  		}
			  	})
			  }
		  }
	  },
	  makeCanvas () {
	  	try{
	  		uni.showLoading({
	  			title: '生成中…'
	  		})
	  		uni.getSystemInfo({
	  			success: (systemInfo) => {
	  				const screenWidth = systemInfo.screenWidth
	  				const fontSize = 15
	  				const margin = 110
					const codeMargin = 105
	  				const reactWidth = 90
					const codeWidth = 80
					const canvasWidth = screenWidth - 20
					const canvasHeight = canvasWidth / 0.88
					this.height = canvasHeight + 125 + 59
					const fillText = '长按识别二维码'
	  				const ctx = uni.createCanvasContext('share_img', this)
					const textWidth = ctx.measureText(fillText).width
	  				ctx.drawImage(this.bgImagePath, 0, 0, canvasWidth, canvasHeight)
					ctx.setFillStyle("#ffffff")
					ctx.fillRect(canvasWidth - margin, canvasHeight - margin, reactWidth, reactWidth)
					ctx.drawImage(this.qrCodeImagePath, canvasWidth - codeMargin, canvasHeight - codeMargin, codeWidth, codeWidth)
					ctx.setFillStyle('#ff0000')
					ctx.setFontSize(fontSize)
					ctx.fillText('长按识别二维码', canvasWidth - margin + ( (reactWidth - textWidth) / 2) , canvasHeight - 5, textWidth, canvasHeight)
	  				ctx.draw()
					this.$nextTick(() => {
						this.$refs.shareInfoWrapper.show()
						this.showBottomAction = true
					})
	  			}
	  		})
	  	}catch(e){
	  		console.log(e)
	  	} finally {
	  		uni.hideLoading()
	  	}
	  },
	  cancel () {
		  this.$refs.shareInfoWrapper.close()
		  this.showBottomAction = false
	  },
	  saveTicketInfoImage () {
		this.showBottomAction = false
	  	this.$refs.shareInfoWrapper.close()
		uni.showLoading({
			title: '正在保存…'
		})
	  	uni.canvasToTempFilePath({
	  		canvasId: 'share_img',
	  		success: (res) => {
	  			uni.saveImageToPhotosAlbum({
	  				filePath: res.tempFilePath,
	  				success: () => {
	  					this.$toast('图片已保存到系统相册中')
	  				},
	  				fail: (error) => {
	  					console.log('保存失败' + error);
	  				},
					complete: () => {
						uni.hideLoading()
					}
	  			})
	  		}
	  	}, this)
	  },
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
        this.shareUrl = res.data.url
		this.bgImage = res.data.share_image
		this.title = res.data.title
		this.num = res.data.num
		this.$nextTick(() => {
			this.$refs.qrcode._makeCode()
			// uni.getImageInfo({
			// 	src: this.$utils.image.getImagePath(this.bgImage),
			// 	success: (res) => {
			// 		this.bgImagePath = res.path
			// 	}
			// })
		})
      }, () => {})
    }
  },
  onLoad () {
	// uni.showShareMenu()
    this.getData()
	uni.getSystemInfo({
		success: (systemInfo) => {
			this.height = systemInfo.screenHeight * 0.8
		}
	})
  },
  onShareAppMessage() {
	  console.log('pages/index/Splash?page=itdetail&identity='+this.$ids.identity+'&storeId='+this.$ids.storeId+'&s='+this.$routeParams.s+'&g='+this.$routeParams.g+'&p='+this.$routeParams.p+'&uid='+this.$routeParams.uid)
  	return {
		title: this.title,
		path: 'pages/index/Splash?page=itdetail&identity='+this.$ids.identity+'&storeId='+this.$ids.storeId+'&s='+this.$routeParams.s+'&g='+this.$routeParams.g+'&p='+this.$routeParams.p+'&uid='+this.$routeParams.uid,
		imageUrl: this.$utils.image.getImagePath(this.bgImage)
	}
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.share-activity-image-container
	.save-img
		height 100vh
		position relative
		.share-message-wrapper
			background-color #000000
			opacity .7
			position absolute
			top 0
			bottom 0
			left 0
			right 0
		.bg-img
			position absolute
			top 0
			left 0
			width 100%
			height 100%
		.share-content-container
			position absolute
			top 0
			bottom 0
			left 0
			right 0
			z-index 1
			.title
				text-indent rem(.4)
				line-height rem(.5)
				textStyle(#333, .35)
			.code-wrapper
				text-align center
				margin 0 auto
				margin-top rem(.5)
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
				line-height rem(.8)
				border-radius rem(.5)
				display block
				width 70%
				margin 0 auto
				font-size rem(.4)
				baseTextStyle(#fff)
				position fixed
				bottom rem(.8)
				left 0
				right 0
			.share-img-post-wrapper
				width 100%
				& image
					width 100%
					height 100%
	.info-wrapper
		position relative
		z-index 10
		.button-wrapper
			position absolute
			top 90%
			left 0
			right 0
			z-index 10
	.share_step
		baseTextStyle(#666)
		text-align left
</style>
