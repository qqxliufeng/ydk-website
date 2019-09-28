<template>
    <view>
        <view class="o-i-container">
            <order-info-waiting-pay v-if="orderType === 1" :detail="detail" @backTop="backTop"></order-info-waiting-pay>
            <order-info-waiting-use v-else-if="orderType === 2" :detail="detail" @backTop="backTop"></order-info-waiting-use>
            <order-info-waiting-comment v-else-if="orderType === 3" :detail="detail" @backTop="backTop"></order-info-waiting-comment>
            <order-info-other v-else :detail="detail" @backTop="backTop"></order-info-other>
        </view>
    </view>
</template>

<script>
import orderInfoWaitingPay from './orderinfo/OrderInfoPay'
import orderInfoWaitingUse from './orderinfo/OrderInfoUse'
import orderInfoWaitingComment from './orderinfo/OrderInfoComment'
import orderInfoOther from './orderinfo/OrderInfoOther'
import UpdateData from '@/mixin/UpdateData.js'
export default {
  name: 'orderInfo',
  mixins: [UpdateData],
  data () {
    return {
      detail: null,
	  orderType: 0
    }
  },
  components: {
    orderInfoWaitingPay,
    orderInfoWaitingUse,
    orderInfoWaitingComment,
    orderInfoOther
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.orderDetails, {
        ord_id: this.$routeParams.orderId
      }, '', (data) => {
        this.detail = data.data
        if (this.orderType === 1) {
          this.detail.time = data.time
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
	onRefresh () {
		this.getData()
	},
    backTop () {
      uni.pageScrollTo({
		scrollTop: 0,
		duration: 100
	  });
    }
  },
  onLoad () {
	  this.orderType = Number(this.$routeParams.orderType)
	  this.getData()
  }
}
</script>
<style lang="stylus" scoped>
</style>
