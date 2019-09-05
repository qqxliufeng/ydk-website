<template>
  <view class='n-d-container'>
    <view class="content-wrapper" v-if="noticeInfo">
      <p class="title">{{noticeInfo.notice.notice_title || '暂无标题'}}</p>
      <p class="content">{{noticeInfo.notice.notice_content || '暂无内容'}}</p>
    </view>
  </view>
</template>

<script>
export default {
  name: 'noticeDetail',
  data () {
    return {
      noticeInfo: null
    }
  },
  mounted () {
    this.$http(this.$urlPath.noticeDetails, {
      identity: this.$route.query.identity,
      store_id: this.$route.query.storeId
    }, '', (data) => {
      this.noticeInfo = data.data
    }, (errorCode, error) => {
      this.$toast('加载失败')
    })
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.content-wrapper
	.title
		padding rem(.2)
		text-align center
		textStyle(#333, .32)
	.content
		padding rem(.2)
		textStyle(#888, .28)
		line-height rem(.3)
</style>
