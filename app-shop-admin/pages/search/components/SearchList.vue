<template>
    <view class="h-s-list-container">
      <view v-if="resultList && resultList.length > 0">
        <block v-for="item of resultList" :key="item.s_id">
          <scenic-list-item :item="item"></scenic-list-item>
        </block>
      </view>
      <view v-else class="empty">
        暂无搜索内容
      </view>
    </view>
</template>

<script>
import ScenicListItem from '@/componets/ScenicListItem.vue'
export default {
  name: 'homeSearchList',
  props: {
    resultList: Array
  },
  components: {
    ScenicListItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.h-s-list-container
	position fixed
	top rem($headerHeight)
	left 0
	right 0
	height 100%
	padding-bottom rem($headerHeight)
	box-sizing border-box
	overflow-y scroll
	.empty
		display flex
		align-items center
		justify-content center
		height 100%
		textStyle(#888, .32)
	.h-l-like-wrapper
		display flex
		padding rem(.2) rem(.3)
		borderBottom()
</style>
