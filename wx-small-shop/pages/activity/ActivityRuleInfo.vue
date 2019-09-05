<template>
  <view class='activity-rule-info-container'>
    <rich-text class="content-info" :nodes="details">
    </rich-text>
  </view>
</template>

<script>
export default {
  name: 'activityRuleInfo',
  data () {
    return {
      details: ''
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.getActivityRuleDetails, {
        assist_id: this.$routeParams.aid
      }, '', (res) => {
        this.details = res.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.activity-rule-info-container
	padding rem(.2)
	.content-info	
		textStyle(#333, .32)
		line-height rem(.4)
</style>
