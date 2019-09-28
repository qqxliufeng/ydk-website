<template>
    <view class="h-t-tip-container">
        <view class="h-t-tip-wrapper" v-if="historyTagList && historyTagList.length > 0">
            <view class="h-t-tip-title">
                <view><text class="iconfont">&#xe62f;</text>搜索历史</view>
                <text class="el-icon-delete" @click="deleteHistory"></text>
            </view>
            <view class="h-t-tip-tags-wrapper">
                <tag size="small" type="info" v-for="(item, index) of historyTagList" :key="index" class="h-t-tip-tag-item" @click.native="historyTagClick(item)" :text="item"></tag>
            </view>
        </view>
    </view>
</template>

<script>
import SearchHistory from '@/mixin/SearchHistory'
import Tag from '@/componets/uni/uni-tag.vue'
export default {
  name: 'homeSearchTip',
  mixins: [SearchHistory],
  data () {
    return {
      historyTagList: [],
      hotTagList: []
    }
  },
  components: {
    Tag
  },
  methods: {
    deleteHistory () {
      this.$refs.confirmDialog.showDialog()
    },
    dialogConfirm () {
      this.clearHistory(this.$root.userInfo.state.id)
      this.historyTagList = []
    },
    historyTagClick (item) {
      this.$emit('search', item)
    },
    getData () {
      this.$http(this.$urlPath.hotSearch, {
        identity: this.$ids.identity,
        store_id: this.$ids.storeId
      }, '', (data) => {
        this.hotTagList = data.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  },
  mounted () {
    // if (this.$root.userInfo.isLogin()) {
    //   let history = this.getHistory(this.$root.userInfo.state.id)
    //   if (history) {
    //     this.historyTagList = history.reverse()
    //   }
    // }
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.h-t-tip-container
	margin-top rem($headerHeight)
	.h-t-tip-wrapper
		padding rem(.2)
		.h-t-tip-title
			overflow hidden
			width 100%
			line-height rem(.4)
			& text:nth-child(1)
				float left
				textStyle(#555, .3)
				line-height rem(.6)
				& text
					color $orangeColor
					margin-right rem(.1)
			& text:nth-child(2)
				float right
				textStyle(#555, .4)
	.h-t-tip-tags-wrapper
		.h-t-tip-tag-item
			margin rem(.2)
</style>
