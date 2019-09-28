<template>
	<view class="s-l-tags-container">
        <view v-for="(item, index) of tagsList"
              :key="index"
              @click="itemClick(item)" class="item-wrapper">
         <text class="item" :class="{ 'item-selected': item.selected }">{{item.name}}</text>
        </view>
    </view>
</template>

<script>
export default {
  name: 'ScenicListType',
  props: {
    tags: Array
  },
  data () {
    return {
      tagsList: null
    }
  },
  watch: {
    tags (newVal, oldVal) {
      if (newVal) {
        this.tagsList = this.tags
        this.tagsList.forEach((element, index) => {
          this.$set(element, 'selected', index === 0)
        })
      }
    }
  },
  methods: {
    itemClick (item) {
      this.tagsList.forEach(element => {
        element.selected = element === item
      })
      this.$emit('tagsClick', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-l-tags-container
	padding rem(.1) 0
	.item-wrapper
		display inline-block
		width 25%
		margin rem(.1) 0
		color #888
		font-size rem(.24)
		text-align center
		.item
			border-radius rem(.3)
			width 80%
			ellipsis()
			display inline-block
			height 100%
			background-color #f5f5f5
			padding rem(.1) 0
		.item-selected
			background-color $orangeColor
			color #fff
</style>
