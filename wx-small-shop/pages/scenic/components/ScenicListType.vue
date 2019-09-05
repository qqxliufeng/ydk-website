<template>
	<view class="s-l-tags-container">
        <text v-for="(item, index) of tagsList"
              :key="index"
              class="s-l-tags-item"
              :class="{ 's-l-tags-item-selected': item.selected }"
              @click="itemClick(item)">
        {{item.name}}
        </text>
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
	padding-top rem(.1)
	overflow hidden
	.s-l-tags-item
		float left
		margin rem(.1) rem(.2)
		border-radius rem(.1)
		border #eeeeee solid 1px
		padding rem(.1) rem(.2)
		color #888
	.s-l-tags-item-selected
		border $primary solid 1px
		color $primary
</style>
