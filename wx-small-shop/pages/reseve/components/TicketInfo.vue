<template>
    <view class="r-d-ticket-info-container">
        <view class="r-d-ticket-info-title-wrapper">
            <text class="r-d-ticket-info-title" v-if="ticketInfo.goods">【{{ticketInfo.goods.goods_title}}】</text>
            <text class="r-d-ticket-info-title-info" @click="showRemarkDialog">购买须知<text class="iconfont">&#xe64c;</text></text>
        </view>
        <view class="r-d-ticket-info-title-wrapper">
            <text class="r-d-ticket-info-time-title">使用日期</text>
        </view>
        <view v-if="ticketInfo.valid_period === 2">
          <p class="single-mode-info">{{ticketInfo.valid_period_info}}</p>
        </view>
        <view class="r-d-ticket-info-time-wrapper" v-else>
            <view class="r-d-ticket-info-time-item" v-for="(item, index) of times" :key="index" @click="timeItemClick(item)" :class="[{'r-d-ticket-info-time-selected': item.isSelected},{'r-d-ticket-info-time-uneable' : !item.isEnable}]">
                <view>{{item.date || ''}}</view>
                <view>周{{$utils.getWeekByWeek(item.week) || ''}}</view>
                <view>￥{{item.price || '￥0'}}</view>
            </view>
            <view class="r-d-ticket-info-time-item" style="border: #63BBB0 solid 1px" @click="showCalendarDialog">
                <p class="more-date">更多日期></p>
            </view>
        </view>
        <view class="r-d-ticket-info-count-wrapper">
            <text class="r-d-ticket-info-count-title">购买数量</text>
            <view class="r-d-ticket-info-count-info">
                <text class="r-d-ticket-info-count-info-price">￥{{tempTime.price || 0}}</text>
                <text class="r-d-ticket-info-count-info-release-count" v-show="tempTime.count >= 0">剩余{{tempTime.count || 0}}张</text>
                <uni-number-box :value="num" size="mini" :min="minNum" @change="onNumberChange"></uni-number-box >
            </view>
        </view>
		<view class="r-d-ticket-info-calendar-wrapper" :animation="animationData">
			<calendar :priceList="events" @callback="select" themeColor="#64bbae">
			</calendar>
		</view>
		<view class="v-modal" v-show="showCalendar" @click="dismissCalendarDialog()"></view>
		<popup-wrapper ref="noticeWrapper" transition="slider" type="bottom" :maskClick="true" height="80%">
			<view class="r-d-ticket-info-remark-wrapper">
				<reseve-notice
								:goods="ticketInfo.goods" 
								:scenic="ticketInfo.scenic" 
								:collectionState="ticketInfo.is_favorites"  
								:store="ticketInfo.store" 
								@colletion="collection"
								@closeDialog="dismissRemarkDialog">
				</reseve-notice>
			</view>
		</popup-wrapper>
    </view>
</template>

<script>
import ReseveNotice from './ReseveNotice'
import uniNumberBox from '@/componets/uni/uni-number-box.vue'
import Calendar from '@/componets/uni/calendar/Calendar.vue'
import PopupWrapper from '@/componets/uni/lu-popup-wrapper.vue'
export default {
  name: 'TicketInfo',
  props: {
    ticketInfo: Object
  },
  components: {
    ReseveNotice,
	uniNumberBox,
	Calendar,
	PopupWrapper
  },
  data () {
    return {
	  animation: uni.createAnimation({
	  	duration: 300,
		timingFunction: "linear",
		delay: 0
	  }),
	  animationData: null,
      num: 1,
      minNum: 1,
      showCalendar: false,
      showRemark: false,
      times: [
        {
          date: '',
          week: '',
          price: '0',
          count: 0,
          salesId: '',
          isEnable: false,
          isSelected: false,
          raw: {}
        },
        {
          date: '',
          week: '',
          price: '0',
          count: 0,
          salesId: '',
          isEnable: false,
          isSelected: false,
          raw: {}
        },
        {
          date: '',
          week: '',
          price: '0',
          count: 0,
          salesId: '',
          isEnable: false,
          isSelected: false,
          raw: {}
        }
      ],
      events: [],
	  tempEvents: {},
      tempTime: {
        date: '',
        price: '0',
        count: 0,
        isEnable: false,
        isSelected: false,
        raw: {}
      }
    }
  },
  computed: {
    remarks () {
      if (this.ticketInfo) {
        let tempRemarks = []
        for (let key in this.ticketInfo.goods) {
          if (this.ticketInfo.goods[key] instanceof Object) {
            tempRemarks.push(this.ticketInfo.goods[key])
          }
        }
        return tempRemarks
      } else {
        return []
      }
    }
  },
  methods: {
    initDate () {
      let date = new Date()
      this.times.forEach((it, index) => {
        this.setTimesItem(date, it, index)
      })
      let tempArray = this.times.filter((item, index, array) => item.isEnable)
      if (tempArray && tempArray.length > 0) {
        tempArray[0].isSelected = true
        this.tempTime = tempArray[0]
        this.emit()
      }
    },
    timeItemClick (item) {
      this.tempTime = item
      this.num = 1
      this.times.forEach(element => {
        element.isSelected = element === item
      })
      this.emit()
    },
    select (startDate) {
      if (startDate.price) {
        let date = new Date(startDate.date.year, Number(startDate.date.month) - 1, startDate.date.day)
        this.times.forEach((it, index) => {
          this.setTimesItem(date, it, index)
        })
        this.tempTime = this.times[0]
        this.emit()
        this.dismissCalendarDialog()
      } else {
		uni.showToast({
			title: '所选日期暂无票的信息，请重新选择…'
		})
      }
    },
    setTimesItem (date, it, index) {
      it.date = this.$utils.dateAdd(date, index).date
      it.week = this.$utils.dateAdd(date, index).week
      let temp = this.tempEvents[it.date]
      it.isEnable = this.tempEvents.hasOwnProperty(it.date) && temp && temp.one_stock && parseInt(temp.one_stock) !== 0 && parseInt(temp.one_stock) !== -2
      it.count = it.isEnable && temp ? temp.one_stock : 0
      it.price = temp ? temp.sale_price : '0'
      it.isSelected = it.isEnable && index === 0
      it.raw = temp
    },
    releaseCount (count) {
      if (count === null) return ''
      if (count === -1 || count === -2 || count === 0) {
        return ''
      } else {
        return '余' + count + '张'
      }
    },
    maxCount (count) {
      if (count === -1) {
        return Number.MAX_VALUE
      } else if (count === -2) {
        return 1
      } else {
        return count || 1
      }
    },
    collection () {
      this.$emit('collection')
    },
    onNumberChange (num) {
	  this.num = num
      this.emit()
    },
    emit () {
      this.$emit('selected', {item: this.tempTime.raw, num: this.num})
    },
    showRemarkDialog () {
		this.$refs.noticeWrapper.show()
    },
	dismissRemarkDialog () {
		this.$refs.noticeWrapper.close()
	},
	showCalendarDialog () {
		this.showCalendar = true
		this.animation.translateY(0).step()
		this.animationData = this.animation.export()
	},
	dismissCalendarDialog () {
		this.showCalendar = false
		this.animation.translateY(667).step()
		this.animationData = this.animation.export()
	},
	init () {
		if (!this.ticketInfo.calendar) {
		  this.$toast('此票今日暂不销售')
		  return
		}
		if (this.ticketInfo.calendar.constructor === Object) {
		  this.tempTime.count = this.ticketInfo.calendar.one_stock || 0
		  this.tempTime.price = this.ticketInfo.calendar.sale_price
		  this.tempTime.raw = this.ticketInfo.calendar
		  this.minNum = this.ticketInfo.goods.min_number
		  this.num = this.minNum
		  this.emit()
		} else {
		  this.ticketInfo.calendar.forEach((item) => {
		    if (item.oneStock) {
		      item.one_stock = item.oneStock
		    }
			item.stock = this.releaseCount(item.one_stock)
			item.price = "￥" + item.sale_price
			this.events.push({
				date: item.date,
				price: item
			})
			this.tempEvents[item.date] = item
		  })
		  this.minNum = this.ticketInfo.goods.min_number
		  this.num = this.minNum
		  this.initDate()
		}
		this.showRemark = true
		setTimeout(() => {
			this.$nextTick(() => {
				this.$refs.noticeWrapper.show()
			})
		}, 50)
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.r-d-ticket-info-container
	z-index 0
	.c-e-wrapper
		& p:nth-of-type(1)
			textStyle($primary, .2)
		& p:nth-of-type(2)
			textStyle($primary, .2)
	.r-d-ticket-info-title-wrapper
		display flex
		padding rem(.2) 0
		margin 0 rem(.2)
		borderBottom()
		align-items center
		.r-d-ticket-info-title
			flex 1
			textStyle(#333, .3)
		.r-d-ticket-info-title-info
			textStyle($primary, .3)
		.r-d-ticket-info-time-title
			flex 1
			textStyle(#333, .3)
			& text
				color #888888
				font-size rem(.22)
				margin-left rem(.2)
		.r-d-ticket-info-time-more
			textStyle(#888888, .28)
	.single-mode-info
		padding rem(.2)
		line-height rem(.5)
		textStyle(#ffad2c, .3)
	.r-d-ticket-info-time-wrapper
		display flex
		padding rem(.2)
		borderBottom()
		.r-d-ticket-info-time-item
			width 25%
			height rem(1.35)
			margin 0 1.25%
			border #f5f5f5 solid 1px
			display flex
			justify-content center
			align-items center
			flex-direction column
			border-radius rem(.1)
			color #333
			& view:nth-child(1)
				smTextStyle(#666)
			& view:nth-child(2)
				color #888
				font-size rem(.2)
				margin-top rem(.05)
			& view:nth-child(3)
				margin-top rem(.2)
				smTextStyle($orangeColor)
			.more-date
				smTextStyle($primary)
		.r-d-ticket-info-time-selected
			border $primary solid 1px
		.r-d-ticket-info-time-uneable
			color #888
			pointer-events none
			& p
				color #ccc !important
	.r-d-ticket-info-count-wrapper
		display flex
		padding rem(.3)
		align-items center
		.r-d-ticket-info-count-title
			textStyle(#333, .3)
			flex 1
		.r-d-ticket-info-count-info
			display flex
			align-items center
			.r-d-ticket-info-count-info-price
				textStyle($orangeColor, .3)
				margin 0 rem(.1)
			.r-d-ticket-info-count-info-release-count
				textStyle(#888, .28)
				margin 0 rem(.2)
	.r-d-ticket-info-calendar-wrapper
		position fixed
		bottom 0
		top 20%
		left 0
		right 0
		z-index 1001
		overflow-y scroll
		background-color #ffffff
		border-top-left-radius rem(.2)
		border-top-right-radius rem(.2)
		padding-top rem(.2)
		transform translateY(667px)
	.r-d-ticket-info-remark-wrapper
		position fixed
		bottom 0
		top 0
		left 0
		right 0
		z-index 1001
		overflow-y scroll
		background-color #ffffff
		border-top-left-radius rem(.2)
		border-top-right-radius rem(.2)
		padding-top rem(.2)
		.r-d-ticket-info-remark-title-wrapper
			display flex
			padding rem(.2)
			background-color #f5f5f5
			position sticky
			top 0
			left 0
			right 0
			z-index 998
			align-items center
			& text:nth-child(1)
				text-align center
				flex 1
				textStyle(#333, .35)
			& text:nth-child(2)
				textStyle(#555, .5)
		.remark-content-wrapper
			position absolute
			top rem(.95)
			left 0
			right 0
			.remark-content-confirm
				line-height rem($headerHeight)
				text-align center
				background $primary
				textStyle(#fff, .35)
				margin-top rem(.2)
	.v-modal
		position fixed
		top 0
		left 0
		right 0
		height 100%
		background-color #000000
		z-index 1000
		opacity .5
</style>
