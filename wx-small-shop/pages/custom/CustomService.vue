<template>
    <view>
        <view class="c-s-container">
            <view class="c-s-title">
                店铺客服
            </view>
            <view>
                <view class="item">
                  <text>
                      店铺名称
                  </text>
                  <text>
                      {{info.store_name || '暂无'}}
                  </text>
                </view>
                <view class="item">
                  <text>
                      联系人
                  </text>
                  <text>
                      {{info.link_name || '暂无'}}
                  </text>
                </view>
                <view class="item">
                  <text>
                      手机号
                  </text>
                  <text class="phone" @click="callPhone">
                      {{info.phone || '暂无'}}
                  </text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
  name: 'customService',
  data () {
    return {
      info: null
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.customService, {
        identity: this.$ids.identity,
        store_id: this.$ids.storeId
      }, '', (data) => {
        if (data.data) {
          this.info = data.data
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
	callPhone () {
		uni.makePhoneCall({
			phoneNumber: this.info.phone
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
.c-s-container
	& > view
		padding rem(.2)
		margin-left rem(.7)
		font-size rpx($uni-font-size-base)
		& text
			display inline-block
			color #888888
		& text:nth-child(1)
			width 30%
			vertical-align middle
		& text:nth-child(2)
			width 60%
			margin-left 5%
			vertical-align middle
	.item
		padding rem(.2)
		& > text
			font-size rem(.3)
		.phone
			textStyle($primary, .3)
			text-decoration underline
	.c-s-title
		color #333333
		font-size rem(.3)
		line-height rem(.4)
		margin-left 0
		margin-top rem(.2)
		& i
			display inline-block
			circleNotify($primary)
			width rem(.2)
			height rem(.2)
			margin 0 rem(.2)
</style>
