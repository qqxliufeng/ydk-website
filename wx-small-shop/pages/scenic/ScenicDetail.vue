<template>
    <view>
        <section v-if="scenicInfo">
			<scenic-detail-header 
								:scenicInfo="scenicInfo" 
								@back="back" 
								@collection="collection" 
								:isFavorites="scenicInfo.isFavorites"
								:scrollTop="scrollTop">
			</scenic-detail-header>
			<scenic-detail-images :imageList="imageList"></scenic-detail-images>
			<scenic-detail-info :scenicInfo="scenicInfo"></scenic-detail-info>
			<safe-protect></safe-protect>
			<scenic-detail-hot :hotGoodsList="hotGoodsList" v-if="hotGoodsList && hotGoodsList.length > 0" @reseve="onReseve"></scenic-detail-hot>
			<scenic-detail-ticket-type :typeGoodsList="typeGoodsList" @reseve="onReseve"></scenic-detail-ticket-type>
			<scenic-detail-leave-message :ask="ask" @leave-message="leaveMessage"></scenic-detail-leave-message>
			<scenic-detail-comment :comment="comment" :tagCanSelected="false"></scenic-detail-comment>
			<view class="s-d-l-m-comment-info-see-more" @click="seeMoreComment" v-if="comment && comment.comment_list.length > 0">
			查看更多
			</view>
        </section>
        <section v-else>
			<load-fail @reload="reload"></load-fail>
        </section>
    </view>
</template>

<script>
import SafeProtect from '@/componets/SafeProtect'
import ScenicDetailHeader from './components/ScenicDetailHeader'
import ScenicDetailImages from './components/ScenicDetailImages'
import ScenicDetailInfo from './components/ScenicDetailInfo'
import ScenicDetailHot from './components/ScenicDetailHot'
import ScenicDetailTicketType from './components/ScenicDetailTicketType'
import ScenicDetailLeaveMessage from './components/ScenicDetailLeaveMessage'
import ScenicDetailComment from './components/ScenicDetailComment'
import LoadFail from '@/componets/LoadFail.vue'
export default {
  name: 'scenicDetail',
  components: {
	SafeProtect,
    ScenicDetailHeader,
    ScenicDetailImages,
    ScenicDetailInfo,
    ScenicDetailHot,
    ScenicDetailTicketType,
    ScenicDetailLeaveMessage,
    ScenicDetailComment,
    LoadFail
  },
  data () {
    return {
      loadState: true,
      sellerInfo: null,
      comment: {},
      ask: {},
      imageList: [],
      scenicInfo: {},
      hotGoodsList: [],
      typeGoodsList: [],
      show: true,
      from: null,
	  scrollTop: 0
    }
  },
  methods: {
    onReseve (goodsId) {
		if (this.$userInfo.isLogin()) {
			this.$push(this.$mRouter.reseveDetail({
				goodsId: goodsId.goodsId,
				scenicId: this.$routeParams.scenicId
			}))
		} else {
			this.$mRouter.login(this.$mRouter.reseveDetail({
				goodsId: goodsId.goodsId,
				scenicId: this.$routeParams.scenicId
			}))
		}
    },
	leaveMessage () {
		if (this.$userInfo.isLogin()) {
			this.$push('/pages/ask/AskMessage?scenicId=' + this.$routeParams.scenicId)
		} else {
			this.$mRouter.login('/pages/ask/AskMessage?scenicId=' + this.$routeParams.scenicId)
		}
	},
    startScenicInfo (type) {
      this.$router.push({name: 'scenicInfo', query: {id: this.$routeParams.scenicId}})
    },
    seeMoreComment () {
		this.$push('/pages/comment/CommentList?scenicId=' +  this.$routeParams.scenicId)
    },
    reload () {
      this.getData()
    },
    delHtmlTag (str) {
      if (str) {
        return str.replace(/<[^>]+>/g, '')
      }
      return ''
    },
    collection () {
      if (this.$userInfo.isLogin()) {
        this.$http(this.$urlPath.userUnFavoroteScenicUrl, {
	scenic_id: this.$routeParams.scenicId
        }, '', (data) => {
          if (this.scenicInfo.isFavorites) {
            this.$toast('取消收藏成功')
            this.scenicInfo.isFavorites = 0
          } else {
            this.$toast('收藏成功')
            this.scenicInfo.isFavorites = 1
          }
        }, (errorCode, error) => {
          this.$toast(error)
        })
      } else {
        this.$mRouter.login()
      }
    },
    getData () {
      this.$http(this.$urlPath.scenicDetailUrl, {
		s_id: this.$routeParams.scenicId,
		businessId: this.$routeParams.businessId,
		identity: this.$ids.identity,
		store_id: this.$ids.storeId
      }, '', (data) => {
		if (data.data) {
			this.loadState = true
			this.imageList = data.data.scenicimages
			// 景区信息
			let info = {}
			info.title = data.data.s_title
			info.tel = data.data.tel
			info.totalSales = data.data.totalSales
			info.address = data.data.address
			info.city = data.data.city
			info.mark = data.data.mark
			info.open = data.data.open
			info.route = data.data.route
			info.tags = data.data.sceniclabel
			info.brief = data.data.brief
			info.isFavorites = data.data.is_favorites
			info.content = data.data.s_content
			this.scenicInfo = info
			this.hotGoodsList = data.data.hot_goods
			this.typeGoodsList = data.data.type_list
			this.comment = data.data.comment
			this.ask = data.data.ask
		} else {
			this.loadState = false
		}
      }, (errorCode, error) => {
		this.loadState = false
      })
    }
  },
  onPageScroll (scroll) {
	  this.scrollTop = scroll.scrollTop
  },
  onLoad() {
	  this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-l-m-comment-info-see-more
    textStyle(#666, .28)
    padding rem(.2)
    text-align center
    border-top #f5f5f5 solid rem(.05)
</style>
