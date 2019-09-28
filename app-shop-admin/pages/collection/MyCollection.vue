<template>
   <div>
       <uni-segement-control :current="mCurrent" :values="['景区收藏', '门票收藏']" styleType="text" activeColor="#64BBAE" @clickItem="segementItemClick"></uni-segement-control>
	   <view class="content-wrapper">
			<view class="c-tabs-item" v-show="mCurrent === 0">
				<scenic-collection ref="scenicCollection" ></scenic-collection>
			</view>
			<view class="c-tabs-item" v-show="mCurrent === 1">
				<ticket-collection ref="ticketCollection"></ticket-collection>
			</view>
	   </view>
   </div>
</template>

<script>
import scenicCollection from './components/ScenicCollection'
import ticketCollection from './components/TicketCollection'
import uniSegementControl from '@/componets/uni/uni-segmented-control.vue'
export default {
  name: 'collection',
  components: {
    scenicCollection,
    ticketCollection,
	uniSegementControl
  },
  data() {
  	return {
  		mCurrent: 0
  	}
  },
  methods: {
	  segementItemClick (index) {
		  this.mCurrent = index
		  uni.startPullDownRefresh()
	  }
  },
  onPullDownRefresh() {
	  if (this.mCurrent === 0) {
		  this.$refs.scenicCollection.onRefresh()
	  } else {
		  this.$refs.ticketCollection.onRefresh()
	  }
  },
  onLoad() {
	  uni.startPullDownRefresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.content-wrapper
	margin-top rem($headerHeight * 1.1)
</style>
