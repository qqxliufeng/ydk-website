<template>
  <view class="o-i-info-shop-info">
      <view class="o-i-info-shop-info-img-wrapper">
          <image :src="$utils.image.getImagePath(store.avatar)"></image>
      </view>
      <view class="o-i-info-shop-info-name-wrapper">
          <p class="o-i-info-shop-info-name">
              <text>商家名称：{{store.store_name  || '暂无'}}</text>
          </p>
          <p class="o-i-info-shop-info-phone">
              <text>联系方式：{{store.linkman_phone || '暂无'}}</text>
          </p>
      </view>
      <text class="iconfont phone"  @click="call">&#xe6a9;</text>
  </view>
</template>

<script>

export default {
  name: 'businessInfo',
  props: {
    store: Object
  },
  methods: {
	call () {
		uni.makePhoneCall({
			phoneNumber: this.store.linkman_phone
		})
	}
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-i-info-shop-info
	position relative
	display flex
	padding rem(.2)
	border-top rem(.1) solid #f5f5f5
	border-bottom rem(.1) solid #f5f5f5
	.o-i-info-shop-info-img-wrapper
		overflow hidden
		height rem(1)
		& image
			width rem(1)
			height rem(1)
			background-color #f5f5f5
			border-radius 50%
	.o-i-info-shop-info-name-wrapper
		display flex
		flex-direction column
		justify-content space-around
		flex 5
		margin-left rem(.1)
		color #888888
		overflow hidden
		.o-i-info-shop-info-name
			line-height rem(.5)
			ellipsis()
	.phone
		display inline-block
		text-align center
		position absolute
		top 30%
		color $primary
		font-size rem(.65)
		right rem(.3)
</style>
