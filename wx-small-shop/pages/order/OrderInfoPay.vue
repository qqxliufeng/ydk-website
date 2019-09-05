<template>
	<view class="o-i-pay-container" v-if="info">
		<view class="o-i-pay-time-wrapper">
			<p>剩余支付时间</p>
			<count-down :second="info.timeout_express" :showDay="false" fontSize="32rpx" @timeup="countDownEnd"></count-down>
		</view>
		<view class="o-i-pay-goods-info-wrapper">
			<view>
				<image :src="imagePath"></image>
			</view>
			<view>
				<p>{{info.goods_title}}</p>
				<p>￥{{info.price}}</p>
			</view>
		</view>
		<view class="o-i-pay-goods-info-money-add">
			<text>￥{{info.price}}</text>
			<text>x{{info.num}}</text>
		</view>
		<view class="sperator-line"></view>
		<view class="o-i-pay-goods-info-money">
			<text>支付金额</text>
			<text>￥{{info.amount}}</text>
		</view>
		<view class="sperator-line-height"></view>
		<!-- <view class="o-i-pay-goods-info-money">
			<text>请选择支付方式</text>
		</view>
		<view class="sperator-line"></view>
		<view class="o-i-pay-type-wrapper">
			<view class="o-i-pay-type-zfb-wrapper" @click="selectPayType('wechatpay')">
				<image class="icon"></image>
				<text>微信</text>
				<text class="el-icon-success" :style="{'color' : payType==='wechatpay' ? '#63BBB5' : '#ccc'}"></text>
			</view>
		</view> -->
		<p class="o-i-pay-action" @click="pay">
			<text class="iconfont weixin-icon">&#xe610;</text>立即支付
		</p>
		<view class="sperator-line"></view>
	</view>
</template>

<script>
import CountDown from '@/componets/uni/uni-countdown.vue'
// import WXIcon from 'images/img_weixin_icon.png'
export default {
  name: 'orderInfoPay',
  components: {
    CountDown
  },
  data () {
    return {
      info: null,
      payType: '',
      dialogVisible: false,
      orderId: null,
      wxPayInfo: null
    }
  },
  computed: {
	imagePath () {
		if (this.info) {
			return this.$utils.image.getImagePath(this.info.scenicimages)
		} else {
			return ''
		}
	}
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.orderPayUrl, {
        out_trade_no: this.$routeParams.no
      }, '', (data) => {
        this.info = data.data
        this.info.timeout_express = this.info.timeout_express - data.time
      }, (errorCode, error) => {
        // this.$toast(error)
        this.$back()
      })
    },
    countDownEnd () {
      this.$toast('订单结束，未支付，请重新下单')
      this.$back()
    },
    pay () {
      this.$http(this.$urlPath.orderPay, {
        out_trade_no: this.$routeParams.no,
        pay_type: 'miniapp'
      }, '正在支付…', (data) => {
		  uni.requestPayment({
			provider: 'wxpay',
			orderInfo: JSON.stringify(data.data),
			nonceStr: data.data.nonceStr,
			timeStamp: data.data.timeStamp,
			package: data.data.package,
			signType: data.data.signType,
			paySign: data.data.paySign,
			success: (res) => {
				if (res.errMsg === 'requestPayment:ok') {
					this.$toast('支付成功')
					this.$replace('/pages/order/OrderPayResult?no=' + this.$routeParams.no + '&scenicId=' + this.info.scenic_id + '&orderId=' + this.info.order_id + '&state=1')
				} else {
					this.$replace('/pages/order/OrderPayResult?no=' + this.$routeParams.no + '&scenicId=' + this.info.scenic_id + '&orderId=' + this.info.order_id + '&state=0')
				}
			},
			fail: (error) => {
				if (error.errMsg === 'requestPayment:fail cancel') {
					this.$toast('支付取消')
				} else {
					this.$replace('/pages/order/OrderPayResult?no=' + this.$routeParams.no + '&scenicId=' + this.info.scenic_id + '&orderId=' + this.info.order_id + '&state=0')
				}
			}
		  })
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  onLoad () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.o-i-pay-time-wrapper
	borderBottom()
	display flex
	flex-direction column
	justify-content center
	align-items center
	padding rem(.5)
	& p:nth-child(1)
		color #888
		font-size  rem(.28)
		line-height  rem(.32)
	.time-wrapper
		color #333
		font-size rem(.5)
		line-height  rem(.52)
		margin-top rem(.2)
.o-i-pay-goods-info-wrapper
	display flex
	padding rem(.2)
	borderBottom()
	& > view:nth-child(1)
		flex 1
		height rem(1)
		overflow hidden
		& image
			width 100%
			height 100%
			border-radius rem(.1)
	& > view:nth-child(2)
		flex 5
		padding-left rem(.2)
		box-sizing border-box
		display flex
		flex-direction column
		justify-content space-between
		overflow hidden
		& p:nth-child(1)
			ellipsis()
			color #333
			font-size rem(.3)
			line-height  rem(.32)
		& p:nth-child(2)
			color $primary
			font-size  rem(.32)
			line-height  rem(.34)
.o-i-pay-goods-info-money
	overflow hidden
	padding rem(.3)
	& text:nth-child(1)
		float left
		textStyle(#333, .3)
		&::before
			display inline-block
			content ""
			background-color $primary
			width  rem(.08)
			color $primary
			height rem(.3)
			margin-right rem(.2)
			vertical-align middle
	& text:nth-child(2)
		float right
		textStyle($orangeColor, .28)
.sperator-line
	horizontalLine(#f5f5f5, .02, 0, .4)
.o-i-pay-goods-info-money-add
	overflow hidden
	padding rem(.3)
	borderBottom()
	& text:nth-child(1)
		float left
		textStyle(#888888, .28)
	& text:nth-child(2)
		float right
		textStyle(#333, .28)
.sperator-line-height
	horizontalLine(#f5f5f5, .2)
.o-i-pay-action
	padding rem(.2)
	background-color $primary
	position fixed
	left 0
	bottom 0
	right 0
	text-align center
	textStyle(#ffffff, .3)
	display flex
	justify-content center
	align-items center
	.weixin-icon
		font-size rem(.45)
		margin-right rem(.3)
.o-i-pay-type-zfb-wrapper
	overflow hidden
	padding rem(.3)
	& text
		textStyle(#333333, .3)
		vertical-align middle
	& text
		textStyle($primary, .3)
		float right
	.icon
		width rem(.5)
		height rem(.5)
		margin-right rem(.2)
		vertical-align middle
</style>
