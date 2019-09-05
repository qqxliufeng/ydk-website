<template>
	<view class="index-index-container">
		<index-header :scrollTop="scroll" :currentCity="currentCity" @selectedCity="selectedCity"></index-header>
		<index-swiper :list="swiperList"></index-swiper>
		<index-notice v-if="notice && notice.notice_title" :title="notice.notice_title" :identity="1" :storeId="1"></index-notice>
		<index-type :list="typeList"></index-type>
		<index-activity :list="activityList" :time="time" v-if="activityList && activityList.length > 0"></index-activity>
		<index-hot :list="hotList" v-if="hotList && hotList.length > 0"></index-hot>
		<index-ad v-if="ad" :ad="ad"></index-ad>
		<index-like :likeList="likeList"></index-like>
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
			currentCity: '济南市'
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
		IndexLike
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
				this.activityList = data.data.assist
				this.hotList = data.data.popularity_goods
				this.ad = data.data.ad
				this.likeList = data.data.guess_like_scenic
				this.notice = data.data.notice
				this.time = Number(data.time)
				this.store = data.data.store
				uni.setNavigationBarTitle({
					title: this.store.store_name
				})
			}, (error) => {
				console.log(error);
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		selectedCity (data) {
			const citys = data.label.split('-')
			this.currentCity = citys[1]
			uni.setStorageSync('currentCity', this.currentCity)
			this.getData()
		}
	},
	onLoad() {
		this.currentCity = uni.getStorageSync('currentCity') || '济南市'
		this.getData()
		this.jumpPage()
		const updateManager = uni.getUpdateManager()
		updateManager.onCheckForUpdate((res) => {
			if (res.hasUpdate) {
				updateManager.onUpdateReady(() => {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success(res) {
							if (res.confirm) {
								updateManager.applyUpdate();
							}
						}
					})
				})
			}
		})
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
