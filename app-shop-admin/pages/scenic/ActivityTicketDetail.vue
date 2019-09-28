<template>
	<view>
		<section v-if="loadState && scenicInfo">
			<ticket-header :scenicInfo="scenicInfo" :scrollTop="scrollTop"  @collection="collection" :isFavorites="goodsInfo.is_favorites"></ticket-header>
			<ticket-images :imageList="scenicInfo.imageList"></ticket-images>
			<activity-ticket-info :assist="assist" :time="time" :scenicInfo="scenicInfo" @countDownEnd="countDownEnd"></activity-ticket-info>
			<ticket-friend-info :assist="assist" :scenicInfo="scenicInfo" @inviteFriend="invoteFriend" @ativityRuleInfo="ativityRuleInfo"></ticket-friend-info>
				<safe-protect ref="safeProtect"></safe-protect>
			<view class="t-d-detail-buy-info">
				<p class="t-d-detail-buy-info-title">购买须知</p>
				<ticket-notice-wrapper :goodsInfo="goodsInfo"></ticket-notice-wrapper>
				<view class="sperator-2"></view>
			</view>
			<view class="sperator-line-2"></view>
			<actviity-ticket-bottom :assist="assist" :price="scenicInfo.minPrice" :isFavorites="goodsInfo.is_favorites" @collection="collection" @seeOtherGoods="seeOtherGoods" @invoteFriend="invoteFriend"></actviity-ticket-bottom>
		</section>
		<section v-else-if="!loadState">
			<load-fail @reload="reload"></load-fail>
		</section>
	</view>
</template>

<script>
import TicketHeader from './components/ScenicDetailHeader'
import TicketImages from './components/ScenicDetailImages'
import TicketInfo from './components/ScenicDetailInfo'
import TicketFriendInfo from './components/ActivityFriendInfo'
import TicketComment from './components/ScenicDetailComment'
import TicketNoticeWrapper from '@/componets/TicketNoticeWrapper'
import TicketRemark from '@/componets/TicketRemark'
import ActivityTicketInfo from './components/ActivityTicketInfo'
import ActviityTicketBottom from './components/ActivityTicketBottom'
import SafeProtect from '@/componets/SafeProtect'
import LoadFail from '@/componets/LoadFail.vue'
import UpdateData from '@/mixin/UpdateData.js'
export default {
  name: 'activityTicketDetail',
  mixins: [UpdateData],
  components: {
    TicketHeader,
    TicketImages,
    TicketInfo,
    TicketFriendInfo,
    TicketComment,
    TicketNoticeWrapper,
    TicketRemark,
    ActivityTicketInfo,
    ActviityTicketBottom,
	SafeProtect,
	LoadFail
  },
  data () {
    return {
      loadState: true,
      scenicInfo: null,
      goodsInfo: {},
      assist: null,
      time: null,
      activityInfo: {
        aid: null,
        uid: null
      },
      countDown: false,
      showFriendList: true,
	  scrollTop: 0
    }
  },
  methods: {
    reload () {
      this.getData()
    },
	onLogin () {
		this.getData()
	},
    delHtmlTag (str) {
      return str.replace(/<[^>]+>/g, '')
    },
    collection () {
      if (this.$userInfo.isLogin()) {
        this.$http(this.$urlPath.userUnFavoroteGoodsUrl, {
          goods_id: this.$routeParams.g
        }, '正在操作…', (data) => {
          if (this.goodsInfo.is_favorites) {
            this.$toast('取消收藏成功')
            this.goodsInfo.is_favorites = 0
          } else {
            this.$toast('收藏成功')
            this.goodsInfo.is_favorites = 1
          }
        }, (errorCode, error) => {
          this.$toast(error)
        })
      } else {
        this.$mRouter.login()
      }
    },
    seeOtherGoods () {
		this.$push(this.$mRouter.scenicDetail({
			scenicId: this.$routeParams.s
		}))
    },
	ativityRuleInfo () {
		this.$push('/pages/activity/ActivityRuleInfo?aid=' + this.$routeParams.p)
	},
    invoteFriend () {
      if (this.$userInfo.isLogin()) {
		  if (this.assist.join.status === 1) {
		    if (!this.countDown) {
		      this.$push(this.$mRouter.reseveDetail({
		      	goodsId: this.$routeParams.g,
		      	scenicId: this.$routeParams.s
		      }))
		    } else {
		      this.$toast('此活动已过期！')
		    }
		  } else {
		    this.$http(this.$urlPath.assistJoin, {
		      assist_id: this.$routeParams.p,
		      goods_id: this.$routeParams.g
		    }, '', (data) => {
		      this.activityInfo.aid = data.data.assist_id
		      this.activityInfo.uid = data.data.user_id
		  		  this.$push(this.$mRouter.shareActivityImage({
		  			  p: this.activityInfo.aid || this.$routeParams.p,
		  			  uid: this.activityInfo.uid,
		  			  s: this.$routeParams.s,
		  			  g: this.$routeParams.g
		  		  }))
		    }, (errorCode, error) => {
		      this.$toast(error)
		    })
		  }
	  } else {
		  this.$mRouter.login()
	  }
    },
    closeFriendList () {
      this.showFriendList = false
    },
    countDownEnd () {
      this.countDown = true
    },
    getData () {
      this.$http(this.$urlPath.promotionDetailUrl, {
		s_id: this.$routeParams.s,
		goods_id: this.$routeParams.g,
		assist_id: this.$routeParams.p,
		identity: this.$ids.identity,
		store_id: this.$ids.storeId
      }, '', (data) => {
        this.loadState = true
        let info = {}
        info.title = data.data.scenic.s_title
        info.tel = data.data.scenic.tel
        info.totalSales = data.data.scenic.totalSales
        info.address = data.data.scenic.address
        info.city = data.data.scenic.city
        info.mark = data.data.scenic.mark
        info.open = data.data.scenic.open
        info.route = data.data.scenic.route
        info.tags = data.data.scenic.sceniclabel
        info.imageList = data.data.scenic.scenicimages
        info.brief = data.data.scenic.brief
        info.price = data.data.scenic.minPrice
        this.scenicInfo = info
        this.scenicInfo.goodsTitle = data.data.goods.goods_title
        this.scenicInfo.totalStock = data.data.goods.totalStock
        this.scenicInfo.totalSales = data.data.goods.totalSales
		this.scenicInfo.minPrice = data.data.scenic.minPrice
        this.goodsInfo = data.data.goods
        this.assist = data.data.assist
        this.time = Number(data.time)
      }, (errorCode, error) => {
        this.loadState = false
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    }
  },
  onPageScroll (scroll) {
  	this.scrollTop = scroll.scrollTop
  },
  onPullDownRefresh() {
  	this.getData()
  },
  onLoad() {
	uni.startPullDownRefresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.header-warpper
	padding rem(.3)
	.title-wrapper
		margin-bottom rem(.2)
		overflow hidden
		& text:nth-child(1)
			float left
			textStyle(#333, .35)
			vertical-align middle
		& text:nth-child(2)
			float right
			textStyle(#888, .25)
			border-radius rem(.1)
			background-color $orangeColor
			color #fff
			padding 0 rem(.2)
.content-warpper
	padding 0 rem(.3) rem(.3) rem(.3)
	.t-d-intro-ticket-name
		padding 0 0 rem(.3) 0
		borderBottom()
		.ticket-title
			textStyle($orangeColor, .3)
		.ticket-price
			float right
			textStyle($orangeColor, .35)
			.ticket-price-tip
				color #888
				font-size rem(.28)
	.t-d-intro-title
		textStyle(#333, .32)
		margin-top rem(.2)
	.t-d-intro-content
		margin-top rem(.2)
		textStyle(#888, .25)
		muitlLineEllipsis(2)
.t-d-intro-back-money
	padding rem(.2)
	overflow hidden
	border-top #f5f5f5 solid 1px
	display flex
	justify-content space-between
	align-items center
	& text
		textStyle(#333, .28)
		& i
			color $orangeColor
	& button
		color #ffffff
		background-color $orangeColor
		border-radius rem(.1)
		padding rem(.1) rem(.2)
.sperator-line-2
	height rem($headerHeight)
.t-d-detail-buy-info
	padding rem(.2)
	.t-d-detail-buy-info-title
		textStyle(#333, .35)
		padding rem(.2) 0
		borderBottom()
	.t-d-detail-buy-info-content
		overflow hidden
		normalTextStyle(#888, .3)
	.t-d-detail-buy-info-see-more
		textStyle(#aaa, .4)
		text-align center
	.sperator-1
		background-color #f5f5f5
		height 2px
		width 90%
		margin 0 auto
.t-d-detail-order-info-wrapper
	display flex
	position fixed
	bottom 0
	left 0
	right 0
	border-top #f5f5f5 solid 1px
	height rem($headerHeight)
	& p
		flex 1
	.t-d-detail-order-info-price
		margin-left rem(.2)
		background-color #ffffff
		line-height rem($headerHeight)
		textStyle(#333, .3)
		& text
			color $orangeColor
	.t-d-detail-order-info-action
		textStyle(#fff, .3)
		text-align center
		background-color $orangeColor
		line-height rem($headerHeight)
.share-content
	display flex
	flex-direction row
	justify-content space-evenly
	& > view
		height rem(2)
		flex 1
		text-align center
		padding-top rem(.2)
		box-sizing border-box
		& > image
			width rem(1.2)
			height rem(1.2)
		& > p
			margin-top rem(.2)
			textStyle(#333, .3)
</style>
