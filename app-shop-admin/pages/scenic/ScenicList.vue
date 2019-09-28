<template>
    <view id="scenicListContainer">
      <scenic-header></scenic-header>
	  <scenic-type-list @type-item-click="typeItemClick" :categoryId="categoryId"></scenic-type-list>
      <view class="s-l-content-wrapper">
		  <scenic-type :tags="tags" @tagsClick="tagsClick" ref="scenicType"></scenic-type>
		  <view v-if="list && list.length > 0">
			  <block v-for="(item, index) of list" :key="index">
				<scenic-list-item :item="item" @itemClick="itemClick"></scenic-list-item>
			  </block>
			  <load-more :status="loadingType"></load-more>
		  </view>
		  <view v-else class="empty">
			暂无搜索内容
		  </view>
      </view>
    </view>
</template>

<script>
import ScenicHeader from './components/ScenicListHeader'
import ScenicType from './components/ScenicListType'
import ScenicListItem from '@/componets/ScenicListItem.vue'
import ListMixin from '@/mixin/List.js'
import ScenicTypeList from '@/componets/ScenicTypeList.vue'
export default {
  name: 'scenicList',
  mixins: [ListMixin],
  components: {
    ScenicHeader,
    ScenicType,
    ScenicListItem,
	ScenicTypeList
  },
  data () {
    return {
      tags: null,
      tempTag: null,
	  currentCity: '济南市',
	  categoryId: null
    }
  },
  methods: {
    getData () {
      let lebelId = this.tempTag ? this.tempTag.id : '0'
      this.$http(this.$urlPath.categoryIndex, {
        cate_id: this.categoryId,
        page: this.page.num,
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
		district: this.currentCity,
        label_id: lebelId
      }, null, (data) => {
        this.tags = data.data.label
        this.tags.unshift({id: 0, name: '全部'})
        this.loadSuccess(data.data.scenic)
      }, (errorCode, error) => {
		  this.loadFail()
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    },
	typeItemClick (item) {
		this.categoryId = item.id
		this.tags = []
		this.tempTag = null
		uni.startPullDownRefresh()
	},
    tagsClick (item) {
      this.tempTag = item
      uni.startPullDownRefresh()
    },
  },
  onLoad() {
	  this.categoryId = this.$routeParams.categoryId
	  this.currentCity = uni.getStorageSync('currentCity') || '济南市'
	  uni.startPullDownRefresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-l-content-wrapper
	.empty
		display flex
		align-items center
		justify-content center
		height 80vh
		textStyle(#888, .32)
</style>
