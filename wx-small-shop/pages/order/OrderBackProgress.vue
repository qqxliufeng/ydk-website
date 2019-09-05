<template>
  <view class='o-b-progress-container'>
	  <view v-for="(item, index) of list" :key="item.rid" class="el-card">
			<p class="title">
				<text>{{item.stateTip}}</text>
				<button type="primary" size="small" class="cancel-back" v-if="item.status === 'REFUND_STATUS'" @click="cancelBack(item)">取消退款</button>
			</p>
			<p class="time">申请时间：{{item.refund_create_time}}</p>
			<p class="time">更新时间：{{item.refund_update_time || '暂无'}}</p>
			<p class="time">退款金额：<text style="color:#ffad2c">￥{{item.refund_amount}}</text></p>
			<p class="time">手续费类型：{{item.refund_way}}</p>
			<p class="time">手续费：<text style="color:#ffad2c">￥{{item.refund_charge}}</text></p>
			<view class="line"></view>
			<view class="money-wrapper">
				<text class="money">实际退款金额：<i>￥{{item.refund_actual_amount}}</i><strong>（{{item.refund_num}}张）</strong></text>
				<text class="open" @click="openInfo(item)">{{item.opened ? '收起' : '展开'}}</text>
			</view>
			<view v-show="item.opened">
			  <p class="time">退款账户：{{getBackPay(item)}}</p>
			  <p class="time">退款单号：{{item.pay_trade_no || item.out_refund_no}}</p>
			  <view class="time-line-wrapper">
				  <uni-step :active="Math.max(0, stepsData.length - 1)" :stepsData="stepsData" direction="column"></uni-step>
			  </view>
			</view>
			<text class="index-tag">{{index + 1}}</text>
	  </view>
  </view>
</template>

<script>
import uniStep from '@/componets/uni/step/uni-steps.vue'
export default {
  name: 'orderBackProgress',
  components: {
	  uniStep
  },
  data () {
    return {
      list: null,
      tempItem: null,
	  stepsData: []
    }
  },
  methods: {
    openInfo (item) {
      item.opened = !item.opened
    },
    getBackPay (item) {
      switch (item.refund_pay_type) {
        case 'alipay':
          return '支付宝'
        case 'wechatpay':
		case 'miniapp':
		  return '微信'
		default:
		  return '其它'
      }
    },
    getData () {
      this.$http(this.$urlPath.orderAfterSalesLog, {
        ord_id: this.$routeParams.id
      }, '', (data) => {
        if (data.data && data.data instanceof Array) {
          this.list = data.data
          this.list.forEach(item => {
            this.$set(item, 'opened', false)
            switch (item.status) {
              case 'REFUND_STATUS':
                item.stateTip = '退款审核中'
                break
              case 'REFUND_STATUS_YES':
                item.stateTip = '审核成功'
                break
              case 'REFUND_STATUS_NO':
                item.stateTip = '审核失败'
                break
              case 'REFUND_STATUS_CANCEL':
                item.stateTip = '取消退款'
                break
              case 'REFUND_PAY':
                item.stateTip = '待退款'
                break
              case 'REFUND_PAY_YES':
                item.stateTip = '退款完成'
                break
              case 'REFUND_PAY_NO':
                item.stateTip = '退款失败'
                break
            }
					  // [
			// 					{title:'买家下单',desc:'2018-11-11'},
			// 					{title:'卖家发货',desc:'2018-11-12'},
			// 					{title:'买家签收',desc:'2018-11-13'},
			// 					{title:'交易完成',desc:'2018-11-14'}]
            item.refund_log.forEach(item => {
				let step = {}
				step.desc = item.ctime
				switch (item.type) {
					case 1:
						step.title = '提交退款申请'
						break
					case 2:
						step.title = '退款审核通过'
						break
					case 3:
						step.title = '退款审核失败'
						break
					case 4:
						step.title = '退款成功'
						break
					case 5:
						step.title = '取消退款成功'
						break
              }
			  this.stepsData.push(step)
            })
          })
        }
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    cancelBack (item) {
      this.tempItem = item
      this.$refs.confirmDialog.showDialog()
    },
    dialogConfirm () {
      if (this.tempItem) {
        this.$http(this.$urlPath.orderCancelRefund, {
          rid: this.tempItem.rid
        }, '正在取消…', (result) => {
          this.$root.$emit('onReload')
          this.$toast('取消退款成功')
          this.getData()
        }, (errorCode, error) => {
          this.$toast(error)
        })
      }
    }
  },
  onLoad () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.o-b-progress-container
	padding-bottom rem(.5)
	.el-card
		margin rem(.2)
		position relative
		boxShadow()
		padding rem(.2)
		border-radius rem(.1)
		.title
			line-height rem(.5)
			& > text
				textStyle(#333, .35)
			.cancel-back
				height rem(.5)
				line-height 0
				margin 0 rem(.2)
		.time
			textStyle(#555, .28)
			margin rem(.3) 0
		.line
			background #f5f5f5
			height 1px
			width 100%
			margin rem(.2) 0
		.money-wrapper
			display flex
			justify-content space-between
			align-items center
			.money
				textStyle(#333, .3)
				& i
					color $orangeColor
				& strong
					color #aaa
					font-size rem(.25)
			.open
				textStyle($primary, .3)
		.time-line-wrapper
			margin-top rem(.2)
		.index-tag
			background $primary
			display inline-block
			width rem(.5)
			line-height rem(.5)
			text-align center
			position absolute
			right 0
			top 0
			color #fff
			font-size rem(.28)
</style>
