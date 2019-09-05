<template>
    <view class="s-d-images-container">
        <swiper v-if="imageList && imageList.length > 0" style="height: 100%;">
            <swiper-item v-for="(item, index) of imageList" :key="index">
                <image :src="$utils.image.getImagePath(item)" class="s-d-images-item" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
  name: 'scenicDetailImages',
  props: {
    imageList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    imageClick () {
      this.$router.push({name: 'gallary', params: {imgs: this.imageList}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-images-container
	height rpx(350)
	overflow hidden
	.s-d-images-item
		width 100%
		height 100%
		background-color #f5f5f5
</style>
