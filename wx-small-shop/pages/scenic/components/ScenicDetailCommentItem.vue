<template>
    <view class="s-d-comment-item-container">
        <view class="s-d-comment-item-title-wrapper">
            <image :src="$utils.image.getImagePath(item.avatar)" :key="item.avatar" mode="aspectFill"></image>
            <text class="s-d-comment-item-title-nickname">{{item.name || $utils.common.hiddenMobile(item.username)}}</text>
            <text></text>
			<rate :value="Number(item.mark)"
			 :disabled="true"
			 size="16"></rate>
        </view>
        <view class="s-d-comment-item-content-wrapper">
            <p :style="{'max-height': contentHeight.maxHeight}" class="s-d-comment-item-content" ref="commentContent">
                {{item.content}}
            </p>
            <p class="s-d-comment-item-content-see-more" v-show="isSeeMore">
                <text :class="[isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up']" @click="seeMoreContent"></text>
            </p>
        </view>
        <view v-if="item.images && item.images.length > 0" class="s-d-comment-item-imags-wrapper">
            <image v-for="(image, index) of item.images" :key="index" :src="$utils.image.getImagePath(image)" @click="imageClick"></image>
        </view>
        <view class="reply-container" v-if="item.answer && item.answer.content">
            <view>
              <text class="reply-title">商家回复:</text>
              <text class="reply-content">{{item.answer.content}}</text>
              <view class="reply-time">{{item.answer.add_time || ''}}</view>
            </view>
        </view>
        <view class="report-wrapper">
            <text class="report" @click="report">举报</text>
        </view>
    </view>
</template>

<script>
import Rate from '@/componets/uni/rate/uni-rate.vue'
export default {
  name: 'scenicDetailCommentItem',
  props: {
    item: Object
  },
  components: {
	Rate  
  },
  data () {
    return {
      contentHeight: {
        maxHeight: '1rem'
      },
      isSeeMore: this.isShowMore(),
      isCollapse: !this.isSeeMore
    }
  },
  methods: {
	report () {
		this.$emit('report', this.item)
	},
    isShowMore () {
      return this.item.content.length > 100
    },
    seeMoreContent () {
      if (this.isCollapse) {
        this.contentHeight.maxHeight = '10rem'
      } else {
        this.contentHeight.maxHeight = '1rem'
      }
      this.isCollapse = !this.isCollapse
    },
    imageClick () {
      this.$router.push({name: 'gallary', params: {imgs: this.item.images}})
    },
    command (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-comment-item-container
	padding rem(.2)
	borderBottom()
	.s-d-comment-item-title-wrapper
		display flex
		align-items center
		& > image
			width rem(.8)
			height rem(.8)
			background #f5f5f5
			border-radius 50%
		& text:nth-child(2)
			flex 1
		.s-d-comment-item-title-nickname
			baseTextStyle(#666)
			margin-left rem(.2)
			display inline-block
	.s-d-comment-item-content-wrapper
		font-size rem(.28)
		color #333
		margin-top rem(.2)
		line-height rem(.35)
		position relative
		.s-d-comment-item-content
			overflow hidden
		.s-d-comment-item-content-see-more
			margin-top rem(.2)
			text-align center
			font-size rem(.4)
	.s-d-comment-item-imags-wrapper
		overflow hidden
		margin-top rem(.2)
		height rem(2)
		text-align center
		& image
			float left
			width 30%
			height 100%
			object-fit cover
			margin-left 2.5%
			border-radius rem(.1)
	.report-wrapper
		overflow hidden
		text-align right
		padding rem(.1) 0
		margin-top rem(.3)
		.report
			border-radius rem(.3)
			border 1px solid #eee
			padding rem(.05) rem(.2)
			textStyle(#888, .25)
	.reply-container
		background-color #f5f5f5
		padding rem(.2)
		border-radius rem(.05)
		margin-top rem(.3)
		font-size rem(.25)
		overflow hidden
		.reply-title
			color $primary
		.reply-content
			color #666
			margin-left rem(.1)
			line-height rem(.35)
		.reply-time
			textStyle(#888, .25)
			text-align right
			margin rem(.1) 0 0 0
</style>
