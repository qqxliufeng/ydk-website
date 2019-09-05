<template>
  <view class='ticket-notice-wrapper' v-if="goodsInfo">
      <ticket-notice title="预订须知" :remarks="goodsInfo.entrance"></ticket-notice>
      <view class="sperator-1"></view>
      <ticket-notice title="费用说明" :remarks="goodsInfo.explain"></ticket-notice>
      <view class="sperator-1"></view>
      <ticket-notice title="退款说明" :remarks="goodsInfo.refund"></ticket-notice>
  </view>
</template>

<script>
import ticketNotice from '@/componets/TicketNotice.vue'
export default {
  name: 'ticketNoticeWrapper',
  props: {
    goodsInfo: Object
  },
  components: {
    ticketNotice
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.sperator-1
	background-color #f5f5f5
	height 2px
	width 90%
	margin 0 auto
</style>
