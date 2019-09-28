<template>
    <view class="o-t-i-container" v-if="itemInfo">
        <view :class="['o-t-i-container-title-wrapper',enableClass]">
            <view class="o-t-i-container-title-no-wrapper">
                <p class="title">凭证号</p>
                <p class="number">{{itemInfo.voucher_number}}</p>
            </view>
            <view class="o-t-i-container-title-waiting-use-num-wrapper">
                <p class="title">待消费</p>
                <p>{{itemInfo.no_check_num}}张</p>
            </view>
            <view class="o-t-i-container-title-total-num-wrapper">
                <p class="title">已消费</p>
                <p>{{itemInfo.consum}}张</p>
            </view>
            <view class="o-t-i-container-title-total-num-wrapper">
                <p class="title">已退款</p>
                <p>{{refundNum || 0}}张</p>
            </view>
            <view class="o-t-i-container-title-code-wrapper" @click="lookCode">
                <p class="title">二维码</p>
                <text class="iconfont">&#xe71e;</text>
            </view>
        </view>
        <view class="o-t-i-container-detail-wrapper">
            <slot name="ticketInfoDetail"></slot>
        </view>
    </view>
</template>

<script>
export default {
  name: 'orderTicketInfo',
  props: {
    itemInfo: Object,
    ticketName: String,
    refundNum: Number
  },
  data () {
    return {
    }
  },
  computed: {
    enableClass () {
      return this.itemInfo.use_status === 0 ? 'o-t-i-enable' : 'o-t-i-unenable'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.o-t-i-enable
	background-color #fdfdfd
	color #555555
.o-t-i-unenable
	background-color #fafafa
	color #B6B6B6
	& .number
		color #B6B6B6 !important
		text-decoration line-through
.title
	textStyle(#888, .25)
.o-t-i-container
	background-color #ffffff
	.o-t-i-container-title-wrapper
		display flex
		padding .3rem .2rem
		.o-t-i-container-title-no-wrapper
			flex 1.1
			overflow hidden
			text-align center
			.number
				font-size .3rem
				margin-top .2rem
				color rgba(200, 0, 0, 1)
		.o-t-i-container-title-waiting-use-num-wrapper
			flex 1
			text-align center
			& p:nth-child(2)
				font-size .3rem
				margin-top .2rem
		.o-t-i-container-title-total-num-wrapper
			flex 1
			text-align center
			& p:nth-child(2)
				font-size .3rem
				margin-top .2rem
		.o-t-i-container-title-code-wrapper
			flex 1
			text-align center
			& text
				font-size .4rem
				margin-top .2rem
				display inline-block
</style>
