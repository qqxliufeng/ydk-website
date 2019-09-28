<template>
  <view class='o-i-content-container' v-if="scenic" >
    <p class="scenic-title">{{scenic.s_title}}</p>
    <view class="sperator"></view>
    <view ref="download">
        <p class="item-info" id="download">{{ticketName}} X {{ticketNum}}</p>
        <p class="item-info">下单时间：{{createOrderTime || '暂无'}}</p>
        <p class="item-info">支付时间：{{payOrderTime || '暂无'}}</p>
        <p class="item-info">验票时间：{{scenic.ticket_check || '暂无'}}</p>
        <p class="item-info">验票地点：{{scenic.ticket_check_info || '暂无'}}</p>
        <view  v-if="voucher && voucher.length > 0">
          <view class="item-info">凭&nbsp;证&nbsp;号：<text style="color: #ffad2c; font-size: 28rpx;">向商家展示消费</text></view>
          <view class="ticket-info-container" v-if="sendCode === 0">
            <view class="code-wrapper" @click="showFullCode">
				<uni-qrcode 
					:val="voucher[0].voucher_number" 
					:loadMake="true" 
					:foreground="voucher && voucher.length > 0 && voucher[0].use_status === 0 ? '#555555' : '#B6B6B6'"
					:pdground="voucher && voucher.length > 0 && voucher[0].use_status === 0 ? '#555555' : '#B6B6B6'"
					@result="qrCodeResult"
				></uni-qrcode>
				<p :class="['code-text', enableClass]">{{num}}</p>
            </view>
            <button  size="mini" type="default" class="download-img" @click="downloadImg" v-if="voucher.length > 0 && voucher[0].use_status === 0 && tempQrCodePath">生成图片</button>
            <view class="sperator-2"></view>
            <view class="info-count-wrapper">
              <text class="info-count-item">待消费: {{voucher[0].no_check_num || 0}}张</text>
              <text class="info-count-item">已消费: {{voucher[0].consum || 0}}张</text>
              <text class="info-count-item" style="color: red">已退款: {{refundTickets || 0}}张</text>
            </view>
          </view>
          <view v-else>
            <order-ticket-info v-for="item of voucher" :key="item.v_id" :itemInfo="item" :ticketName="ticketName" :refundNum="refundTickets || 0"></order-ticket-info>
          </view>
        </view>
    </view>
    <view class="sperator-3"></view>
	<popup-wrapper type="center" ref="qrcodeWrapper" transition="fade" width="400rpx" height="400rpx">
		 <view style="background-color: #ffffff; padding: 20rpx;">
		 	 <uni-qrcode
					ref="qrcode"
					:val="voucher[0].voucher_number" 
					foreground="#333333"
					pdground="#ffffff"
					size="360"
		 	></uni-qrcode>
		 </view>
	</popup-wrapper>
	<popup-wrapper type="center" ref="ticketInfoWrapper" transition="fade" width="90%" height="380px">
		 <view style="background-color: #ffffff; padding: 20rpx; width: 100%; text-align: center;">
		 	 <canvas canvas-id="ticketInfo" style="background-color: #F5F5F5;height: 320px; width: 100%;"></canvas>
			 <view style="display: flex;margin-top: 10px;">
				<button size="mini"  type="warn" @click="$refs.ticketInfoWrapper.close()">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>
				<button type="primary" size="mini" @click="saveTicketInfoImage">保存图片</button>
			 </view>
		 </view>
	</popup-wrapper>
	
  </view>
</template>
<script>
import orderTicketInfo from './OrderTicketInfo'
import uniQrcode from '@/componets/uni/qrcode/tki-qrcode.vue'
import PopupWrapper from '@/componets/uni/lu-popup-wrapper.vue'
export default {
  name: 'orderInfoContent',
  props: {
    scenic: Object,
    voucher: Array,
    ticketName: String,
    ticketNum: Number,
    refundTickets: String,
    sendCode: Number,
    timeLog: Array
  },
  components: {
    orderTicketInfo,
	uniQrcode,
	PopupWrapper
  },
  data () {
    return {
      showDialog: false,
      postUrl: '',
      dialogTitle: '长按保存图片到手机',
      showCode: false,
      createOrderTime: '',
      payOrderTime: '',
	  tempQrCodePath: null,
	  openType: ''
    }
  },
  computed: {
    enableClass () {
      return this.voucher && this.voucher.length > 0 && this.voucher[0].use_status === 0 ? 'o-t-i-enable' : 'o-t-i-unenable'
    },
	num () {
		return this.voucher && this.voucher.length > 0 ? this.$utils.common.splitNum(this.voucher[0].voucher_number) : ''
	}
  },
  methods: {
    showFullCode () {
		this.$refs.qrcodeWrapper.show()
		this.$refs.qrcode._makeCode()
    },
	qrCodeResult (result) {
		this.tempQrCodePath = result
	},
    downloadImg () {
		if (this.tempQrCodePath) {
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
					const marginTop = fontSize + 5
					const marginLeft = 10
					const ctx = uni.createCanvasContext('ticketInfo', this)
					ctx.setFillStyle('#000000')
					ctx.setFontSize(fontSize)
					ctx.fillText(this.ticketName + ' X' + this.ticketNum, marginLeft, marginTop)
					ctx.fillText('下单时间：' + (this.createOrderTime || '暂无'), marginLeft, marginTop * 2)
					ctx.fillText('支付时间：' + (this.payOrderTime || '暂无'), marginLeft, marginTop * 3)
					ctx.fillText('验票时间：' + (this.scenic.ticket_check || '暂无'), marginLeft, marginTop * 4)
					ctx.fillText('验票地点：' + (this.scenic.ticket_check_info || '暂无'), marginLeft, marginTop * 5)
					ctx.fillText('凭证号：向商家展示消费', marginLeft, marginTop * 6)
					ctx.drawImage(this.tempQrCodePath, (screenWidth * 0.9 - 20 - 100) / 2 , marginTop * 7, 100, 100)
					ctx.setFontSize(20)
					const noWidth = ctx.measureText(this.voucher[0].voucher_number)
					ctx.fillText(this.voucher[0].voucher_number, (screenWidth * 0.9 - 20 - noWidth.width) / 2, marginTop * 7 + 140)
					ctx.draw()
					this.$refs.ticketInfoWrapper.show()
				}
			})
		}catch(e){
			console.log(e)
		} finally {
			uni.hideLoading()
		}
	},
	saveTicketInfoImage () {
		this.$refs.ticketInfoWrapper.close()
		uni.canvasToTempFilePath({
			canvasId: 'ticketInfo',
			success: (res) => {
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: () => {
						this.$toast('图片保存成功')
					},
					fail: (error) => {
						console.log('保存失败' + error);
					}
				})
			}
		}, this)
		
	}
  },
  mounted() {
  	this.timeLog.forEach((item, index) => {
  		if (item.type === '下单时间') {
  		  this.createOrderTime = item.ctime
  		} else if (item.type === '支付时间') {
  		  this.payOrderTime = item.ctime
  		}
  	})
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-t-i-enable
	color #555555
.o-t-i-unenable
	color #B6B6B6 !important
	text-decoration line-through
.o-i-content-container
	.fixed-code-wrapper
		/* position fixed
		top 0
		bottom 0
		left 0
		right 0
		background-color #333
		z-index 1000 */
		display flex
		justify-content center
		align-items center
	.sperator
		background-color #f5f5f5
		height 1px
		width 100%
	.scenic-title
		padding rem(.3) rem(.2)
		textStyle(#333, .3)
	.item-info
		padding rem(.1) rem(.2)
		textStyle(#666, .28)
		line-height rem(.4)
	.ticket-info-container
		display flex
		flex-direction column
		justify-content center
		padding rem(.2)
		align-items center
		.download-img
			border-radius rem(.4)
			border 1px solid $primary
			margin-top rem(.2)
			baseTextStyle($primary)
			background-color #FFFFFF
		.code-wrapper
			width rem(3.5)
			background-color #f5f5f5
			text-align center
			padding rem(.2)
			border-radius rem(.2)
			.canvas-code
				width rem(3) !important
				height rem(3) !important
			.code-text
				margin-top rem(.2)
				textStyle(#666, .5)
		.sperator-2
			width 85%
			margin 0 auto
			background-color #f5f5f5
			height 1px
			margin rem(.3) 0
		.info-count-wrapper
			display flex
			flex-direction row
			width 90%
			margin 0 auto
			justify-content center
			align-items center
			.info-count-item
				flex 1
				text-align center
				textStyle(#666, .3)
	.sperator-3
		background-color #f5f5f5
		height 5px
</style>
