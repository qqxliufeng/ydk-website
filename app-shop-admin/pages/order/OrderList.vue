<template>
    <view>
		<uni-segement-control :current="mCurrent" :values="items" styleType="text" activeColor="#64BBAE" @clickItem="segementItemClick"></uni-segement-control>
		<view  class="order-wrapper">
			<view v-if="list.length > 0">
				<view v-for="(item, index) of list" :key="item.ord_id">
					<order-list-item :item="item" :index="index" @action1Click="action1Click" @action2Click="action2Click"></order-list-item>
				</view>
				<load-more :status="loadingType"></load-more>
			</view>
			<view v-else class="empty">
				暂无订单
			</view>
		</view>
	</view>
</template>

<script>
import orderListItem from './components/OrderListItem'
import uniSegementControl from '@/componets/uni/uni-segmented-control.vue'
import ListMixin from '@/mixin/List.js'
import OrderMixin from '@/mixin/Order.js'
import UpdateData from '@/mixin/UpdateData.js'
export default {
  name: 'orderList',
  mixins: [ListMixin, OrderMixin, UpdateData],
  components: {
	uniSegementControl,
	orderListItem
  },
  data () {
    return {
      currentRefs: null,
      mCurrent: 0,
	  items: [
		  '待付款',
		  '待使用',
		  '待评价',
		  '售后/退款'
	  ]
    }
  },
  methods: {
	segementItemClick (index) {
		this.mCurrent = index
		this.list = []
		uni.startPullDownRefresh()
	},
	getData () {
		this.$http(this.$urlPath.orderList, {
			status: this.mCurrent + 1,
			page: this.page.num
		}, null, (data) => {
			this.serverTime = data.time
		    this.setOrderState(data.data)
			this.loadSuccess(data.data)
		}, (error) => {
			this.loadFail()
		}, () => {
			uni.stopPullDownRefresh()
		})
	}
  },
  onLoad () {
	  this.mCurrent = Number(this.$routeParams.state)
	  uni.startPullDownRefresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.order-wrapper
	margin-top rem($headerHeight)
	padding-top rem(.05)
.empty
	height 100vh
	display flex
	justify-content center
	align-items center
	textStyle(#888, .3)
</style>
