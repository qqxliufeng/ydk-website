<template>
	<view class="safe-protect-container">
		<view class="o-i-ticket-safe-container" @click="openPopup">
			<p>优待客消费保障</p>
			<view class="o-i-ticket-info-tag">
				<text><text class="iconfont">&#xe69e;</text> 入园保障</text>
				<text><text class="iconfont">&#xe69e;</text> 官方</text>
			</view>
		</view>
	    <uni-popup ref="popup" type="center">
		  <view>
			<view class="title-wrapper">
			  <text class="title"><text>官方</text></text>
			</view>
			<p class="content">成功预订门票获得确认短信后（按规则购买和使用），我们将保障您顺利入园游玩。</p>
			<view class="title-wrapper">
			  <text class="title"><text>入园保障</text></text>
			</view>
			<p class="content">成功预订门票获得确认短信后（按规则购买和使用），我们将保障您顺利入园游玩。</p>
			<text slot="footer" class="dialog-footer">
			  <button type="primary" size="mini">确 定</button>
			</text>
		  </view>
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
	.title-wrapper
		padding rem(.2) 0
		.title
			textStyle($primary, .32)
			& text
				textStyle(#333, .32)
				margin-left rem(.3)
	.content
		textStyle(#666, .28)
		line-height rem(.4)
		padding rem(.2)
</style>
