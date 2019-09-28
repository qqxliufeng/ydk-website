<template>
    <view class="o-a-list-container">
		<view v-if="list.length > 0">
			<view v-for="(item, index) of list" :key="item.ord_id">
				<order-list-item :item="item" :index="index" @action1Click="action1Click" @action2Click="action2Click"></order-list-item>
			</view>
			<load-more :status="loadingType"></load-more>
		</view>
		<view v-else>
			<view class="empty" v-if="$userInfo.isLogin()">
				暂无订单
			</view>
			<view v-else class="empty" >
				<button open-type="getUserInfo" size="mini">立即登录</button>
			</view>
		</view>
    </view>
</template>

<script>
import orderListItem from './components/OrderListItem'
import List from '@/mixin/List.js'
import Order from '@/mixin/Order.js'
import UpdateData from '@/mixin/UpdateData.js'
export default {
  name: 'orderAllList',
  mixins: [List, Order, UpdateData],
  components: {
    orderListItem
  },
  methods: {
	getData () {
		this.$http(this.$urlPath.orderList, {
			status: '0',
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
	  if (this.$userInfo.isLogin()) {
		  uni.startPullDownRefresh()
	  }
  },
  onTabItemTap() {
	if (!this.$userInfo.isLogin()) {
		uni.switchTab({
			url: '/pages/index/index',
			complete: ()=> {
				getApp().globalData.backPage = '/pages/order/OrderAllList',
				this.$push('/pages/login/Login')
			}
		})
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.empty
	height 100vh
	display flex
	justify-content center
	align-items center
	textStyle(#888, .3)
</style>
