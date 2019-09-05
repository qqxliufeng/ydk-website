<template>
	<view>
		<view v-for="(item,index) of list" :key="index" class="c-item-card">
			<view class="c-content-container">
				<view class="c-item-content-container">
					<view class="c-item-count">
						<view :class="{'c-item-state-1-primary' : state === '1'}">
						<i>￥</i><text>5</text>
						</view>
						<p :class="{'c-item-state-1-black' : state === '1'}">满20元可用</p>
					</view>
					<view class="c-item-line">
						<text></text>
						<text></text>
					</view>
					<view @click="showRemark(index)" class="c-item-info">
						<view :class="{'c-item-state-1-black' : state === '1'}">
							<view>XX优惠券</view>
							<view>有效期2018-1-1至2018-1-1</view>
							<view class="iconfont">使用说明 &#xe63d;</view>
							<text class="iconfont c-state-tag" v-if="state !== '1'">{{ state === '2' ? '&#xe643;' : '&#xe668;'}}</text>
						</view>
					</view>
				</view>
				<view class="c-item-content-remark-container" :ref="'contentRemarkContainer'+index">
					<text></text>
					<view class="c-item-content-bottom-circle-container">
						<text class="c-item-content-bottom-circle"></text>
					</view>
					<text></text>
					<view class="c-item-content-remark" :style="{ color: state === '1' ? '#333333' : '#cccccc' }">
						这是备注这是备注这是备注这是
					</view>
				</view>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
	</view>
</template>
<script>
import ListMixin from '@/mixin/List.js'
export default {
	name: 'couponItem',
	mixins: [ListMixin],
	props: {
		state: {
			type: String,
			default: '1'
		}
	},
  methods: {
    showRemark (index) {
      const item = this.couponList[index]
      item.isShowRemark = !item.isShowRemark
      const remark = this.$refs['contentRemarkContainer' + index][0]
      if (item.isShowRemark) {
        remark.style.minHeight = '1.5rem'
      } else {
        remark.style.minHeight = '0px'
      }
    },
    upCallBack (page, mescroll) {
      mescroll.endSuccess(0)
      // setTimeout(() => {
      //   this.couponList.push({
      //     isShowRemark: false
      //   })
      //   this.couponList.push({
      //     isShowRemark: false
      //   })
      //   this.couponList.push({
      //     isShowRemark: false
      //   })
      //   this.couponList.push({
      //     isShowRemark: false
      //   })
      //   if (page.num > 4) {
      //     mescroll.endSuccess(0)
      //   } else {
      //     mescroll.endSuccess(100)
      //   }
      // }, 1000)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'

</style>
