<template>
<view class="r-d-ticket-info-remark-content-wrapper">
    <p class="r-d-ticket-info-remark-content-title-info" v-if="value">
        <text class="remark-key">
            {{remark.title}}
        </text>
        <text class="remark-value" :style="{color: specialList.includes(remark.title) ? '#ffad2c' : '#888'}">
            {{value || '暂无'}}
        </text>
    </p>
</view>
</template>

<script>

export default {
  name: 'ticketRemark',
  props: {
    remark: Object
  },
  data () {
    return {
      specialList: ['适用人群:', '退款规则:', '换票时间:', '入园时间:']
    }
  },
  computed: {
    value () {
      if (this.remark) {
        for (let key in this.remark) {
          if (key === 'title') {
            continue
          }
          return this.remark[key]
        }
      } else {
        return '暂无'
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~mixin.styl'
.r-d-ticket-info-remark-content-wrapper
	margin rem(.3) 0
	.r-d-ticket-info-remark-content-title
		padding rem(.1)
		vertical-align bottom
		font-size rem(.3)
		&::before
			content ""
			display inline-block
			width 2px
			height rem(.3)
			margin-right rem(.2)
			background-color $primary
			vertical-align bottom
	.r-d-ticket-info-remark-content-title-info
		margin-left rem(.55)
		line-height rem(.4)
		& text
			display inline-block
		.remark-key
			baseTextStyle(#333333)
			width 20%
			vertical-align top
		.remark-value
			width 75%
			baseTextStyle(#888888)
</style>
