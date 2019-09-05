<template>
    <view class="o-i-back-money-container">
        <view class="o-i-back-content-container" v-if="info">
            <view class="header-wrapper">
				<view style="color: #FFFFFF;">申请退款</view>
				<p class="o-i-use-info">
					提示：退款成功之后 ，下单时所使用优惠券将无法退回你的账户
				</p>
				<view>
					<!-- <order-step></order-step> -->
				</view>
            </view>
            <p class="o-i-back-money-goods">{{info.scenic.s_title}}</p>
            <view class="o-i-back-money-goods-info-wrapper">
                <view class="img-wrapper">
                    <image :src="imagePath" mode="aspectFill"></image>
                </view>
                <view class="goods-info-wrapper">
                    <p>{{info.ord_product_name}}</p>
                    <p>数量：{{info.ord_ticket_num}}张</p>
                    <p>总价：￥{{info.ord_amount}}</p>
                </view>
            </view>
            <view class="o-i-back-l-f">
                <view class="num-wrapper">
                	<text class="o-i-back-money-num">
                	    退票数量
                	</text>
                	<uni-number-box v-model="backNum" @change="handleChange" :min="1" :max="info.remain_num" :disabled="!canInput" size="mini"></uni-number-box>
                </view>
                <p class="back-tip">{{backTip}}</p>
            </view>
			<view class="sperator-line"></view>
            <view class="o-i-back-l-f">
                <text class="o-i-back-money-num">
                    退款金额
                </text>
                <text>
                    <strong>￥{{backMoney.toFixed(2)}}</strong>
                </text>
            </view>
            <view>
                <p v-for="(item,index) of tempMoneyList" :key="index" class="o-i-info-money-detail">
                    <text class="text-color-1" :class="{'text-color-3': index == tempMoneyList.length - 1}">{{item.name}}</text>
                    <text class="text-color-2" :class="{'text-color-4': index == tempMoneyList.length - 1}">{{item.money}}</text>
                </p>
            </view>
            <view class="sperator-line"></view>
            <view class="o-i-back-l-f">
                <text class="o-i-back-money-num">
                    退款原因
                </text>
                <view class="reason-list">
                    <radio-group @change="changeReason">
                        <label class="o-i-back-money-reason-item" v-for="(item, index) of info.reason" :key="item.id" >
							<view class="reason-item">
								<radio :value="item.reason"/>
							</view>
							<view class="reason-item">
								<text style="color: #333333; font-size: 28rpx; padding-top: 4rpx;">{{item.reason}}</text>
							</view>
						</label>
                    </radio-group>
                </view>
            </view>
			<view class="sperator-line"></view>
            <p class="o-i-back-money-goods">留言</p>
            <view class="o-i-back-money-leave-message-wrapper">
                <textarea
					placeholder="请输入内容"
					v-model="message"
					maxlength="100"
					placeholder-style="font-size: 28rpx" style="width: 100%; height: 100px; color: #333333; font-size: 28rpx;">
				</textarea>
            </view>
            <p class="o-i-back-money-submit" @click="submit">提交</p>
        </view>
    </view>
</template>

<script>
import uniNumberBox from '@/componets/uni/uni-number-box.vue'
export default {
  name: 'orderBackMoney',
  components: {
    // orderStep
	uniNumberBox
  },
  data () {
    return {
      isShowReasonDialog: false,
      info: null,
      radio: -1,
      charge: 0,
      textarea: '',
      backNum: 0,
      tempMoneyList: [],
      reason: null,
      message: ''
    }
  },
  computed: {
    canInput () {
    //   is_refund_part 0=部分退 ，1=一次性退完
		if (this.info) return this.info.is_refund_part === 0
		return 0
    },
    backMoney () {
		if (this.info) return Number(this.backNum) * Number(this.info.ord_price)
		return 0
    },
    backTip () {
		if (this.info) return this.info.is_refund_part === 0 ? '当前门票支持部分退款' : '当前门票仅支持全部退款'
		return '暂无'
    },
	imagePath () {
		if (this.info) return this.$utils.image.getImagePath(this.info.scenicimage)
		return ''
	}
  },
  methods: {
    moneyDetailList () {
      if (this.info) {
        this.tempMoneyList.push({
          name: '单价：',
          money: '￥' + this.info.ord_price
        },
        {
          name: '数量：',
          money: 'X' + this.backNum
        })
        let charge = 0
        let chargeName = '手续费：'
        switch (this.info.is_charge) {
          case 0: // 无手续费
            charge = 0
            break
          case 1: // 每笔订单收取手续费
            charge = this.info.charge
            chargeName = '手续费(每次)：'
            break
          case 2: // 每张门票收取手续费
            charge = this.info.charge * this.backNum
            chargeName = '手续费(每张)：'
            break
        }
        this.tempMoneyList.push({
          name: chargeName,
          money: '￥' + Number(charge).toFixed(2)
        },
        {
          name: '实际退款：',
          money: '￥' + (this.backMoney - Number(charge)).toFixed(2)
        })
      }
    },
    showBackMoneyReason () {
      this.isShowReasonDialog = !this.isShowReasonDialog
    },
    getData () {
      this.$http(this.$urlPath.orderRefundDetail, {
        ord_id: this.$routeParams.id
      }, '', (data) => {
        this.info = data.data
        this.backNum = this.info.remain_num
        this.moneyDetailList()
      }, (errorCode, error) => {
		this.$toast(error)
      })
    },
    handleChange (num) {
      this.tempMoneyList = []
      this.backNum = num
      this.moneyDetailList()
    },
    changeReason (item) {
      this.reason = item.detail.value
    },
    submit () {
      if (!this.reason) {
        this.$toast('请选择退款原因')
        return
      }
      this.$http(this.$urlPath.orderRefund, {
        ord_id: this.$routeParams.id,
        num: this.backNum,
        reason: this.reason,
        message: this.message
      }, '正在提交申请…', (data) => {
        this.$toast('退款申请成功')
        uni.$emit('orderUpdate')
        this.$back()
      }, (errorCode, error) => {
		this.$toast(error)
      })
    }
  },
  onLoad () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.o-i-back-money-container
	.o-i-back-content-container
		.header-wrapper
			background-color $primary
			min-height rem(1)
			padding rem(.2)
			.o-i-use-info
				color #eeeeee
				font-size  rem(.25)
				margin-top rem(.2)
				line-height rem(.3)
			.o-i-back-money-remark
				float right
				color #ffffff
				font-size  rem(.28)
				line-height rem(.3)
		.o-i-back-money-goods
			color #333
			padding rem(.3) rem(.2)
			font-size rem(.3)
		.o-i-back-money-goods-info-wrapper
			display flex
			background-color #f5f5f5
			align-items center
			flex-direction row
			padding rem(.2)
			.img-wrapper
				overflow hidden
				height rem(1.4)
				width rem(1.4)
				border-radius rem(.1)
				margin-right rem(.2)
				& image
					width 100%
					height 100%
			.goods-info-wrapper
				display flex
				overflow hidden
				flex 1
				flex-direction column
				justify-content space-between
				& > p:nth-child(1)
					color #333
					font-size  rem(.3)
					ellipsis()
				& > p:nth-child(2)
					color #888
					font-size  rem(.25)
					margin rem(.1) 0
				& > p:nth-child(3)
					color #888
					font-size  rem(.25)
		.o-i-back-l-f
			overflow hidden
			width 100%
			padding rem(.3) rem(.2)
			font-size  rem(.28)
			line-height rem(.3)
			box-sizing border-box
			borderBottom()
			.num-wrapper
				display flex
				justify-content space-between
			& text:nth-child(2)
				float right
				color #888
				& strong
					color $orangeColor
			& .back-tip
				textStyle(#888, .25)
				margin-top rem(.4)
				text-align right
			.o-i-back-money-num
				margin-top  rem(.14)
				baseTextStyle(#333)
			.reason-list
				border-top 1px solid #f5f5f5
				margin-top rem(.3)
				.o-i-back-money-reason-item
					display block
					line-height rem(.5)
					margin-top rem(.3)
					.reason-item
						display inline-block
						baseTextStyle(#333)
		.o-i-info-money-detail
			overflow hidden
			margin rem(.2) 0
			line-height rem(.3)
			padding 0 rem(.2)
			& text:nth-child(1)
				float left
			& text:nth-child(2)
				float right
			.text-color-1
				color #888888
				font-size  rem(.28)
			.text-color-2
				color #333333
				font-size  rem(.28)
			.text-color-3
				color #333333
				font-size  rem(.28)
			.text-color-4
				color $orangeColor
				font-size  rem(.28)
		.sperator-line
			background-color #f5f5f5
			height rem(.1)
		.o-i-back-money-leave-message-wrapper
			padding rem(.2)
			margin rem(.1) rem(.2)
			border #F5F5F5 solid 2rpx
		.o-i-back-money-submit
			text-align center
			color #ffffff
			font-size  rem(.35)
			line-height rem($headerHeight)
			margin-top rem(.3)
			background-color $primary
		.o-i-back-money-reason-input
			font-size rem(.3)
</style>
