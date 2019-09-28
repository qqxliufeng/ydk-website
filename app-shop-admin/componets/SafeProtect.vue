<template>
	<view class="safe-protect-container">
		<view class="o-i-ticket-safe-container" @click="openPopup">
			<p>消费保障</p>
			<view class="o-i-ticket-info-tag">
				<text><text class="iconfont">&#xe69e;</text> 入园保障</text>
				<text><text class="iconfont">&#xe69e;</text> 官方</text>
			</view>
		</view>
	    <uni-popup ref="popup" type="bottom">
		  <view style="position: relative;">
			<icon type="cancel" class="clear close-icon" @click="close" color="#333333"></icon>
			<view class="content-wrapper">
				<view class="title-wrapper">
				  <text class="title">消费保障</text>
				</view>
				<p class="content">预定门票成功后，获得凭证确认，同时按【预定须知】使用；景区正常营业情况下，造成用户无法正常使用门票，用户可在景区购买市场价门票入园，差价由平台预先支付给您，同时，还需要赔偿用户在平台实际成交金额的10%（但最高不超过200元）</p>
				<view class="title-wrapper">
				  <text class="title">入园保障</text>
				</view>
				<p class="content">用户遵守【预定须知】，但是门票无法正常使用，请先联系平台客服记录同时要求处理，如果客服在30分钟内无法解决，平台执行【消费保障】给予用户赔偿。</p>
				<view class="title-wrapper">
				  <text class="title">免责说明</text>
				</view>
				<p class="content">
					1】用户遵守【预定须知】，造成门票无法使用的，但是用户没有第一时间联系平台要求解决问题，而是自行购票入园后联系平台要求处理，平台不给予受理与赔偿；<br/>
					2】用户违反【预定须知】，造成门票无法使用，平台不给予受理与赔偿；<br/>
					3】因自然现象，政府临时管制，等一切不可抗拒因素，造成门票无法使用的，平台不给予赔偿。
				</p>
			</view>
		  </view>
		  <view class="dialog-footer" @click="close">我知道了</view>
	    </uni-popup>
  </view>
</template>

<script>
import uniPopup from '@/componets/uni/popup/uni-popup'
export default {
  name: 'safeProtect',
  components: {
	uniPopup
  },
  methods: {
	  openPopup () {
		  this.$refs.popup.open()
	  },
	  close () {
		  this.$refs.popup.close()
	  }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.safe-protect-container
	boxShadow()
	.o-i-ticket-safe-container
		background-color #EDF8F7
		border-bottom rem(.02) solid #f5f5f5
		padding rem(.2)
		& p
			color $primary
		.o-i-ticket-info-tag
			overflow hidden
			margin-top rem(.2)
			line-height rem(.27)
			& text
				float left
				color #333333
				font-size rem(.22)
				margin-right rem(.2)
				& text
					color $primary
					font-size rem(.2)
	.content-wrapper
		.title-wrapper
			padding rem(.2) 0
			.title
				textStyle($orangeColor, .32)
				font-weight bold
				& text
					textStyle(#333, .32)
					margin-left rem(.3)
	.dialog-footer
		background-color $primary
		baseTextStyle(#fff)
		text-align center
		padding rem(.15)
	.clear
		position absolute
		top 10px
		right 10px
		float right
	.content
		textStyle(#666, .28)
		line-height rem(.4)
		padding rem(.2)
</style>
