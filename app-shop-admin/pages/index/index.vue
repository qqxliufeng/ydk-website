<template>
	<view class="index-index-container">
		<index-header :scrollTop="scroll" :currentCity="currentCity" @selectedCity="selectedCity" :citys="citys"></index-header>
		<index-swiper :list="swiperList" @itemClick="swiperItemClick"></index-swiper>
		<index-notice v-if="notice && notice.notice_title" :title="notice.notice_title" :identity="1" :storeId="1"></index-notice>
		<index-type :list="typeList"></index-type>
		<index-activity :list="activityList" :time="time" v-if="activityList && activityList.length > 0"></index-activity>
		<index-hot :list="hotList" v-if="hotList && hotList.length > 0"></index-hot>
		<index-ad v-if="ad" :ad="ad"></index-ad>
		<index-like :likeList="likeList" @seeMore="seeMore"></index-like>
		<technology-support v-if="likeList && likeList.length > 0"></technology-support>
	</view>
</template>

<script>
import IndexHeader from './componets/IndexHeader.vue'
import IndexSwiper from './componets/IndexSwiper.vue'
import IndexNotice from './componets/IndexNotice.vue'
import IndexType from './componets/IndexType.vue'
import IndexActivity from './componets/IndexActivity.vue'
import IndexHot from './componets/IndexHot.vue'
import IndexAd from './componets/IndexAd.vue'
import IndexLike from './componets/IndexLike.vue'
import TechnologySupport from '@/componets/TechnologySupport.vue'
import HandleJumpPage from '@/mixin/HandleJumpPage.js'
export default {
	data() {
		return {
			scroll: 0,
			swiperList: [],
			typeList: [],
			activityList: [],
			hotList: [],
			ad: null,
			likeList: [],
			store: {},
			notice: null,
			time: 0,
			currentCity: '济南市',
			citys: []
		}
	},
	mixins: [HandleJumpPage],
	components: {
		IndexHeader,
		IndexSwiper,
		IndexNotice,
		IndexType,
		IndexActivity,
		IndexHot,
		IndexAd,
		IndexLike,
		TechnologySupport
	},
	onPageScroll(scroll) {
		this.scroll = scroll.scrollTop
	},
	methods:{
		getData () {
			this.$http(this.$urlPath.indexUrl, {
				identity: this.$ids.identity,
				district: this.currentCity,
				store_id: this.$ids.storeId
			}, '', (data) => {
				this.swiperList = data.data.swiper
				this.typeList = data.data.category
				getApp().globalData.typeList = this.typeList
				this.activityList = data.data.assist
				this.hotList = data.data.popularity_goods
				this.ad = data.data.ad
				this.likeList = data.data.guess_like_scenic
				this.notice = data.data.notice
				this.time = Number(data.time)
				this.store = data.data.store
				this.citys = data.data.area
				if (this.citys) {
					this.citys.forEach(item => {
						item.isSelected = false
						item.isSelected = item.name === this.currentCity
					})
				}
				uni.setNavigationBarTitle({
					title: this.store.store_name + '-易行旅行'
				})
			}, (error) => {
				console.log(error);
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		selectedCity (data) {
			this.currentCity = data.name
			uni.setStorageSync('currentCity', this.currentCity)
			this.getData()
		},
		swiperItemClick (item) {
			this.$push(this.$mRouter.scenicDetail({
				scenicId: item.scenic_id
			}))
		},
		seeMore () {
			if (this.typeList && this.typeList.length > 0) {
				this.$push(this.$mRouter.scenicList({
					categoryId: this.typeList[0].id
				}))
			}
		}
	},
	onLoad() {
		this.currentCity = uni.getStorageSync('currentCity') || '济南市'
		this.getData()
		this.jumpPage()
		// const updateManager = uni.getUpdateManager()
		// updateManager.onCheckForUpdate((res) => {
		// 	if (res.hasUpdate) {
		// 		updateManager.onUpdateReady(() => {
		// 			uni.showModal({
		// 				showCancel: false,
		// 				title: '更新提示',
		// 				content: '新版本已经准备好，立即更新',
		// 				success(res) {
		// 					if (res.confirm) {
		// 						updateManager.applyUpdate();
		// 					}
		// 				}
		// 			})
		// 		})
		// 	}
		// })
	},
	onPullDownRefresh () {
		this.getData()
	}
}
</script>

<style scoped lang="scss">
	.index-index-container {
		width: 100%;
	}
</style>
