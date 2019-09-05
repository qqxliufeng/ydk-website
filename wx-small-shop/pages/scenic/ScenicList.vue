<template>
    <view id="scenicListContainer">
      <scenic-header></scenic-header>
      <view class="s-l-content-wrapper">
		  <scenic-type :tags="tags" @tagsClick="tagsClick"></scenic-type>
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
export default {
  name: 'scenicList',
  mixins: [ListMixin],
  components: {
    ScenicHeader,
    ScenicType,
    ScenicListItem
  },
  data () {
    return {
      tags: null,
      tempTag: null
    }
  },
  methods: {
    getData () {
      let lebelId = this.tempTag ? this.tempTag.id : ''
      this.$http(this.$urlPath.categoryIndex, {
        cate_id: this.$routeParams.categoryId,
        page: this.page.num,
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
        label_id: lebelId
      }, null, (data) => {
        if (!this.tags) {
          this.tags = data.data.label
          this.tags.unshift({id: 0, name: '全部'})
        }
        this.loadSuccess(data.data.scenic)
      }, (errorCode, error) => {
        this.loadFail()
      }, () => {
		  uni.stopPullDownRefresh()
	  })
    },
    tagsClick (item) {
      this.tempTag = item
      uni.startPullDownRefresh()
    }
  },
  onLoad() {
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
