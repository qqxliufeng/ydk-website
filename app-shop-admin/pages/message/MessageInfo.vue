<template>
<view class='m-i-container'>
  <view class="content" v-if="info">
    <h1 class="title">{{info.title}}</h1>
    <rich-text :nodes="info.content"></rich-text>
  </view>
</view>
</template>

<script>
export default {
  name: 'messageInfo',
  data () {
    return {
      info: null
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.messageDetails, {
        id: this.$routeParams.mid
      }, '', (data) => {
        this.info = data.data
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
<style lang='stylus' scoped>
@import '~mixin.styl'
.content
	padding-left rem(.2)
	padding-right rem(.2)
	.title
		text-align center
		padding rem(.2)
		textStyle(#333, .35)
</style>
