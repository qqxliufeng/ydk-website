<template>
  <view>
      <view class='activity-ticket-detail-container'>
          <section v-if="loadState && scenicInfo">
            <ticket-header :scenicInfo="scenicInfo" :scrollTop="scrollTop" @collection="collection" :isFavorites="goodsInfo.is_favorites" :isShowCollection="false"></ticket-header>
            <ticket-images :imageList="scenicInfo.imageList"></ticket-images>
            <activity-ticket-info :assist="assist" :time="time" :scenicInfo="scenicInfo" @countDownEnd="countDownEnd" :showComplete="false"></activity-ticket-info>
            <invitation-info :scenicInfo="scenicInfo" :assist="assist" @helper="helper" @join="toJoin" :inviteruser="inviterUser" @ativityRuleInfo="ativityRuleInfo"></invitation-info>
			<safe-protect ref="safeProtect"></safe-protect>
            <view class="t-d-detail-buy-info">
                <p class="t-d-detail-buy-info-title">购买须知</p>
                <ticket-notice-wrapper :goodsInfo="goodsInfo"></ticket-notice-wrapper>
                <view class="sperator-2"></view>
            </view>
            <view class="sperator-line-2"></view>
            <actviity-ticket-bottom :assist="assist" :isFavorites="goodsInfo.is_favorites" @collection="collection" @seeOtherGoods="seeOtherGoods" @invoteFriend="invoteFriend" :isShow="false"></actviity-ticket-bottom>
          </section>
          <section v-else-if="!loadState">
            <load-fail @reload="reload"></load-fail>
          </section>
      </view>
  </view>
</template>

<script>
import TicketHeader from './components/ScenicDetailHeader'
import TicketImages from './components/ScenicDetailImages'
import TicketInfo from './components/ScenicDetailInfo'
import InvitationInfo from './components/InvitationInfo'
import TicketComment from './components/ScenicDetailComment'
import TicketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import LoadFail from '@/componets/LoadFail.vue'
import ActivityTicketInfo from './components/ActivityTicketInfo'
import ActviityTicketBottom from './components/ActivityTicketBottom'
import SafeProtect from '@/componets/SafeProtect'
import UpdateData from '@/mixin/UpdateData.js'
export default {
  name: 'activityTicketDetail',
  mixins: [UpdateData],
  components: {
    TicketHeader,
    TicketImages,
    TicketInfo,
    InvitationInfo,
    TicketComment,
    TicketNoticeWrapper,
    ActivityTicketInfo,
    ActviityTicketBottom,
	SafeProtect,
    LoadFail
  },
  data () {
    return {
      loadState: true,
      isSeeMore: true,
      showBuyAction: true,
      scenicInfo: null,
      goodsInfo: {},
      remarks: [],
      assist: null,
      inviterUser: null,
      time: null,
      dialogVisible: false,
      countDown: false,
      showFriendList: true,
	  scrollTop: 0
    }
  },
  methods: {
    reload () {
      this.getData()
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
    invoteFriend () {
		if (this.countDown) {
			this.$toast('此活动已结束啦~')
		} else {
			this.helper()
		}
    },
	toJoin () {
		if (this.$userInfo.isLogin()) {
			this.$replace(this.$mRouter.activityDetail({
				p: this.$routeParams.p,
				s: this.$routeParams.s,
				g: this.$routeParams.g
			}))
		} else {
			this.$mRouter.login()
		}
	},
	helper () {
		if (this.countDown) {
			this.$toast('此活动已经结束啦~')
			return
		}
		if (this.$userInfo.isLogin()) {
			this.helperFriend()
		} else {
			this.$mRouter.login()
		}
    },
    helperFriend () {
      if (this.countDown) {
        this.$toast('此活动已经结束啦~')
        return
      }
      this.$http(this.$urlPath.assistInvite, {
        assist_id: this.$routeParams.p,
        invite_user_id: this.$userInfo.state.id, // 被邀请人的id
        user_id: this.$routeParams.uid
      }, '', (res) => {
        uni.showModal({
        	title: '提示',
			content: '谢谢您，为好友助力成功啦~',
			confirmText: '我要参加',
			cancelText: '完成助力',
			success: () => {
				this.completeHelper()
			}
        })
      }, (errorCode, error) => {
        this.$toast(error)
      })
    },
    completeHelper () {
      this.$replace(this.$mRouter.activityDetail({
      	p: this.$routeParams.p,
      	s: this.$routeParams.s,
      	g: this.$routeParams.g
      }))
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
        store_id: this.$ids.storeId,
        uid: this.$routeParams.uid
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
        this.goodsInfo = data.data.goods
        this.scenicInfo.goodsTitle = data.data.goods.goods_title
        this.scenicInfo.totalStock = data.data.goods.totalStock
        this.scenicInfo.totalSales = data.data.goods.totalSales
		this.scenicInfo.minPrice = data.data.scenic.minPrice
        this.assist = data.data.assist
        this.inviterUser = data.data.inviter_user
        this.time = Number(data.time)
      }, (errorCode, error) => {
        this.loadState = false
      })
    },
    ativityRuleInfo () {
      this.$push('/pages/activity/ActivityRuleInfo?aid=' + this.$routeParams.p)
    },
	onLogin () {
		this.helperFriend()
	}
  },
  onPageScroll (scroll) {
  	this.scrollTop = scroll.scrollTop
  },
  onLoad () {
	if (this.$userInfo.isLogin()) {
		this.helperFriend()
	}
	this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.slide-fade-enter-active, .slide-fade-leave-active
	transition all .3s
.slide-fade-enter, .slide-fade-leave-to
	transform translateY($headerHeight)
.t-d-intro-title
	textStyle(#333, .32)
	margin-top rem(.2)
.t-d-intro-content
	margin-top rem(.2)
	normalTextStyle(#888, .25)
	muitlLineEllipsis(2)
.t-d-intro-ticket-name
	textStyle($orangeColor, .3)
	padding 0 0 rem(.3) 0
	borderBottom()
	.ticket-price
		float right
		.ticket-price-tip
			color #888
			font-size rem(.25)
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
	height $headerHeight
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
	height $headerHeight
	& p
		flex 1
	.t-d-detail-order-info-price
		margin-left rem(.2)
		background-color #ffffff
		line-height $headerHeight
		textStyle(#333, .3)
		& text
			color $orangeColor
	.t-d-detail-order-info-action
		textStyle(#fff, .3)
		text-align center
		background-color $orangeColor
		line-height $headerHeight
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
		& > img
			width rem(1.2)
			height rem(1.2)
		& > p
			margin-top rem(.2)
			textStyle(#333, .3)
.weixin-tip
	height 100vh
	display flex
	justify-content center
	align-items center
	textStyle(#888, .4)
</style>
