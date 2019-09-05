<template>
  <view>
      <view v-if="list" class="message-container">
        <block v-for="item of list" :key="item.aid">
          <leave-message-item :item="item" @reportClick="showReportPicket"></leave-message-item>
        </block>
		<load-more :status="loadingType"></load-more>
      </view>
      <p class="l-m-list-ask" @click="ask">我要提问</p>
	  <mpvue-picker :pickerValueArray="pickerValueArray" ref="reportPicker" @onConfirm="onConfirm"></mpvue-picker>
  </view>
</template>

<script>
import LeaveMessageItem from './components/LeaveMessageItem'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
import ListMixin from '@/mixin/List.js'
import Reports from '@/mixin/Reports.js'
export default {
  name: 'leaveMessageList',
  mixins: [ListMixin, Reports],
  components: {
    LeaveMessageItem,
	mpvuePicker
  },
  methods: {
	showReportPicket (item) {
		this.$refs.reportPicker.show()
		this.selectedItem = item
	},
	onConfirm (picObj) {
		this.doReport(2, this.selectedItem.aid, picObj.label)
	},
    getData () {
      this.$http(this.$urlPath.askListUrl, {
        s_id: this.$routeParams.scenicId,
        page: this.page.num
      }, null, (data) => {
        this.loadSuccess(data.data)
      }, (errorCode, error) => {
        this.loadFail()
      },() => {
		  uni.stopPullDownRefresh()
	  })
    },
	ask () {
		this.$push(this.$mRouter.askQustion({
			scenicId: this.$routeParams.scenicId
		}))
	}
  },
  onLoad() {
  	uni.startPullDownRefresh()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.message-container
	padding-bottom rem($headerHeight * 1.2)
.l-m-list-ask
	line-height rem($headerHeight)
	textStyle(#ffffff, .3)
	background $primary
	position fixed
	bottom 0
	left 0
	right 0
	text-align center
</style>
