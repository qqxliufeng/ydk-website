<template>
  <view class='o-d-detail-container'>
    <p class="title"><text class="title-info">订单信息</text></p>
    <view class="content-wrapper">
      <p class="content-title">
        联系人
      </p>
      <p class="content-info">
        姓&nbsp;&nbsp;&nbsp;名：{{detail.ord_check_taker_name || '暂无'}}
      </p>
      <p class="content-info">
        手机号：{{detail.ord_check_taker_phone || '暂无'}}
      </p>
    </view>
    <view class="sperator-1"></view>
    <view class="content-wrapper" v-for="(item, index) of detail.tourist" :key="item.t_id">
      <p class="content-title">
        游玩人{{index+1}}
      </p>
      <p class="content-info">
        姓&nbsp;&nbsp;&nbsp;名：{{item.t_username || '暂无'}}
      </p>
      <p class="content-info">
        手机号：{{item.t_phone || '暂无'}}
      </p>
    </view>
    <view class="sperator-1" v-if="detail.tourist && detail.tourist.length > 0"></view>
    <view class="content-wrapper">
      <p class="content-title">
        订单金额
      </p>
      <p class="content-info">
        门票价格：￥{{detail.ord_price}}      X{{detail.ord_ticket_num}}
      </p>
      <p class="content-info">
        合计金额：￥{{detail.ord_amount}}
      </p>
    </view>
    <view class="sperator-1"></view>
    <ticket-remark :remark="shopName"></ticket-remark>
    <ticket-remark :remark="tradeNo"></ticket-remark>
    <ticket-remark v-for="(item, index) of orderLog" :key="index" :remark="item"></ticket-remark>
  </view>
</template>

<script>
import TicketRemark from '@/componets/TicketRemark.vue'
export default {
  name: 'orderDetail',
  props: {
    detail: Object
  },
  components: {
    TicketRemark
  },
  data () {
    return {
		shopName: { title: '下单店铺', value: this.detail.shop_name },
		tradeNo: { title: '订单编号', value: this.detail.ord_id }
    }
  },
  computed:{
	  orderLog () {
		  let orderLogs = []
		  this.detail.order_log.forEach((item) => {
			  orderLogs.push({
				  title: item.type,
				  value: item.ctime
			  })
		  })
		  return orderLogs
	  }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-d-detail-container
	.title
		padding rem(.2)
		&:before
			content ''
			width 3px
			height rem(.3)
			background-color $primary
			display inline-block
			vertical-align middle
		.title-info
			display inline-block
			margin-left rem(.3)
			color #333
			font-size rem(.32)
			vertical-align middle
	.content-wrapper
		padding-left rem(.55)
		.content-title
			textStyle(#333, .3)
			margin rem(.2) 0
		.content-info
			margin-left rem(.2)
			textStyle(#888, .26)
			line-height rem(.5)
	.sperator-1
		height 2px
		width 90%
		margin rem(.2) auto
		background-color #f5f5f5
</style>
