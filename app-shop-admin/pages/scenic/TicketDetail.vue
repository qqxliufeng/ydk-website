<template>
    <view>
        <section v-if="scenicInfo">
          <ticket-header :scenicInfo="scenicInfo" :scrollTop="scrollTop" @collection="collection" :isFavorites="goodsInfo.is_favorites"></ticket-header>
          <ticket-images :imageList="scenicInfo.imageList"></ticket-images>
		  <view class="header-warpper">
			  <view class="title-wrapper">
			      <text>{{scenicInfo.title}}</text>
			      <text>{{scenicInfo.mark}}分</text>
			  </view>
			  <view class="s-d-info-header-tags-wrapper" v-if="scenicInfo.tags">
			  	<tag type="success" class="s-d-info-tag" size="small" v-for="(item, index) of scenicInfo.tags" :key="index" :text="item"></tag>
			  </view>
			  <view class="t-d-intro-ticket-name">
			      <text class="ticket-name">{{goodsInfo.goods_title}}</text>
			      <text class="ticket-old-price">￥{{goodsInfo.retailPrice}}</text>
			      <text class="ticket-price">￥{{scenicInfo.price}}</text>
			  </view>
			  <p class="t-d-intro-title">景区须知</p>
			  <p class="t-d-intro-content" @click="startScenicInfo" v-delete-html="'sdfasdfasfdasd'">{{scenicInfo.brief}}</p>
		  </view>
		  <safe-protect></safe-protect>
          <view class="t-d-detail-buy-info">
              <p class="t-d-detail-buy-info-title">购买须知</p>
              <ticket-notice-wrapper :goodsInfo="goodsInfo"></ticket-notice-wrapper>
              <view class="sperator-2"></view>
          </view>
          <view class="sperator-line-2"></view>
          <view class="t-d-detail-order-info-wrapper">
              <view class="collection-wrapper" @click="collection">
				<uni-icon :size="20" :type="goodsInfo.is_favorites ===  1 ? 'star-filled' : 'star'"></uni-icon>
                <p>收藏</p>
              </view>
              <view class="other-goods" @click="seeOtherGoods">查看其它商品</view>
              <view class="t-d-detail-order-info-action" @click="reseve">立即预定</view>
          </view>
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
import TicketComment from './components/ScenicDetailComment'
import TicketNoticeWrapper from '@/componets/TicketNoticeWrapper.vue'
import TicketRemark from '@/componets/TicketRemark.vue'
import LoadFail from '@/componets/LoadFail.vue'
import uniIcon from '@/componets/uni/rate/uni-icon.vue'
import Tag from '@/componets/uni/uni-tag.vue'
import SafeProtect from '@/componets/SafeProtect'
export default {
  name: 'TicketDetail',
  components: {
    TicketHeader,
    TicketImages,
    TicketInfo,
    TicketComment,
    TicketNoticeWrapper,
    TicketRemark,
	uniIcon,
    LoadFail,
	Tag,
	SafeProtect
  },
  data () {
    return {
      loadState: true,
      bugInfoHeight: {
        maxHeight: '185rpx'
      },
      isSeeMore: true,
      showBuyAction: true,
      scenicInfo: null,
      goodsInfo: {},
      remarks: [],
	  scrollTop: 0
    }
  },
  methods: {
    seeMore () {
      if (this.isSeeMore) {
        this.bugInfoHeight.maxHeight = '100000rpx'
      } else {
        this.bugInfoHeight.maxHeight = '185rpx'
      }
      this.isSeeMore = !this.isSeeMore
    },
    reseve () {
		this.$push(this.$mRouter.reseveDetail({
			goodsId: this.$routeParams.goodsId,
			scenicId: this.$routeParams.scenicId
		}))
    },
    reload () {
      this.getData()
    },
    startScenicInfo () {
		this.$push(this.$mRouter.scenicInfo({
			scenicId: this.$routeParams.scenicId
		}))
    },
    seeOtherGoods () {
		this.$push(this.$mRouter.scenicDetail({
			scenicId: this.$routeParams.scenicId
		}))
    },
    delHtmlTag (str) {
	  if (str) return str.replace(/<[^>]+>/g, '')
	  return ''
    },
    collection () {
      if (this.$userInfo.isLogin()) {
        this.$http(this.$urlPath.userUnFavoroteGoodsUrl, {
          goods_id: this.$routeParams.goodsId
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
    getData () {
      this.$http(this.$urlPath.goodsDetailUrl, {
        s_id: this.$routeParams.scenicId,
        goods_id: this.$routeParams.goodsId,
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
        this.goodsInfo = data.data.goods
		this.scenicInfo.brief = this.delHtmlTag(this.scenicInfo.brief)
      }, (errorCode, error) => {
        this.loadState = false
      })
    }
  },
  onPageScroll (scroll) {
  	this.scrollTop = scroll.scrollTop
  },
  onLoad () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.header-warpper
	padding rem(.3)
	boxShadow()
	margin rem(.2)
	margin-top rem(-.4)
	position relative
	z-index 1
	background-color #ffffff
	border-radius rem(.1)
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
	.s-d-info-header-tags-wrapper
		padding-bottom rem(.3)
		borderBottom()
		.s-d-info-tag
			margin-right rem(.2)
			textStyle($primary, .2)
		.s-d-info-header-saller
			float right
			textStyle(#888888, .25)
	.t-d-intro-title
		textStyle(#333, .32)
		margin-top rem(.2)
	.t-d-intro-content
		margin-top rem(.2)
		textStyle(#888, .25)
		muitlLineEllipsis(2)
.t-d-intro-ticket-name
	textStyle($orangeColor, .3)
	padding rem(.3) 0
	borderBottom()
	display flex
	flex-direction row
	align-items center
	.ticket-name
		flex 1
		ellipsis()
		margin-top rem(.05)
		baseTextStyle($orangeColor)
	.ticket-old-price
		textStyle(#666, .28)
		text-decoration line-through
		margin-right rem(.2)
	.ticket-price
		textStyle($orangeColor, .4)
		background-color #fff
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
	boxShadow()
	margin rem(.2)
	border-radius rem(.1)
	background-color #FFFFFF
	.t-d-detail-buy-info-title
		textStyle(#333, .35)
		padding rem(.2) 0
		borderBottom()
	.t-d-detail-buy-info-content
		overflow hidden
		textStyle(#888, .3)
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
	background #fff
	.t-d-detail-order-info-action
		textStyle(#fff, .25)
		text-align center
		background-color $orangeColor
		line-height rem($headerHeight)
		flex 1
	.collection-wrapper
		display flex
		padding 0 rem(.3)
		width rem(.8)
		flex-direction column
		justify-content center
		height 100%
		flex 2
		textStyle(#FFAD2C, .25)
	.other-goods
		flex 1
		line-height rem($headerHeight)
		background-color #ff5353
		text-align center
		textStyle(#fff, .25)
</style>
