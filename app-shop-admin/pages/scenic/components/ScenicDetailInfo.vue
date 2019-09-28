<template>
    <view class="s-d-info-container">
        <view class="s-d-info-header-wrapper">
            <view class="title-wrapper">
                <text>{{scenicInfo.title}}</text>
                <text>{{scenicInfo.mark || 0}}分</text>
            </view>
            <view class="s-d-info-header-tags-wrapper" v-if="scenicInfo.tags">
				<tag type="success" class="s-d-info-tag" size="small" v-for="(item, index) of scenicInfo.tags" :key="index" :text="item"></tag>
            </view>
            <view class="s-d-info-middle-wrapper">
                <view class="s-d-info-scenic-info-wrapper">
                	<view @click="startScenicInfo">
                		<p class="s-d-info-scenic-info-title">景区须知</p>
                		<p class="s-d-info-scenic-info-info">{{delHtmlTag(scenicInfo.brief)}}</p>
                	</view>
                </view>
                <view class="s-d-info-scenic-open-time-wrapper">
                	<p>营业时间</p>
                	<p>{{scenicInfo.open}}</p>
                </view>
                <view class="s-d-info-scenic-location-wrapper" @click="location">
                    <text class="iconfont s-d-info-scenic-location-icon">&#xe850;</text>
                    <view class="s-d-info-scenic-location">
                        <p>{{scenicInfo.city}}</p>
                        <p>{{scenicInfo.tel}}</p>
                    </view>
                    <text class="iconfont s-d-info-scenic-phone" @click="callPhone">&#xe6a9;</text>
                </view>
            </view>
        </view>
        <view class="sperator-line"></view>
		<safe-protect ref="safeProtect"></safe-protect>
    </view>
</template>

<script>

import Tag from '@/componets/uni/uni-tag'
export default {
  name: 'scenicDetailInfo',
  props: {
    scenicInfo: Object
  },
  components: {
	Tag
  },
  methods: {
    startScenicInfo () {
		uni.navigateTo({
			url: this.$mRouter.scenicInfo({
				scenicId: this.$parent.$routeParams.scenicId
			})
		})
    },
	delHtmlTag (str) {
	  if (str) {
	    return str.replace(/<[^>]+>/g, '')
	  }
	  return ''
	},
	callPhone () {
		uni.makePhoneCall({
			phoneNumber: this.scenicInfo.tel
		})
	},
	location () {
		// this.$push('/pages/common/Map?index=2323')
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-info-container
	position relative
	margin rem(.3)
	boxShadow()
	margin-top rem(-.2)
	background-color #FFFFFF
	border-radius rem(.1)
	z-index 1
	.s-d-info-header-wrapper
		padding rem(.3)
		.title-wrapper
			margin-bottom rem(.2)
			overflow hidden
			& text:nth-child(1)
				float left
				textStyle(#333, .35)
				vertical-align middle
			& text:nth-child(2)
				float right
				textStyle(#888, .25)
				border-radius .1rem
				background-color $orangeColor
				color #fff
				padding 0 rem(.2)
		.s-d-info-header-tags-wrapper
			padding-bottom rem(.3)
			borderBottom()
			.s-d-info-tag
				margin-right rem(.2)
				textStyle($primary, .2)
			.s-d-info-header-saller
				float right
				textStyle(#888888, .25)
		.s-d-info-middle-wrapper
			padding-top rem(.3)
			overflow hidden
			.s-d-info-scenic-info-wrapper
				overflow hidden
				display flex
				height 100%
				justify-content center
				& p
					muitlLineEllipsis(2)
				& view:nth-child(1)
					overflow hidden
					flex 1
				& view:nth-child(3)
					overflow hidden
					flex 1
				.vertical-line
					width 1px
					height rem(1)
					margin rem(.1) rem(.1)
					background-color #f5f5f5
				.s-d-info-scenic-info-title
					textStyle(#333333, .3)
				.s-d-info-scenic-info-info
					margin-top rem(.2)
					baseTextStyle(#888888, .25)
					muitlLineEllipsis(2)
			.s-d-info-scenic-open-time-wrapper
				margin-top rem(.2)
				background-color #f5f5f5
				padding rem(.1)
				border-radius rem(.1)
				& p:nth-child(1)
					textStyle(#333, .28)
				& p:nth-child(2), & p:nth-child(3)
					textStyle(#888, .25)
			.s-d-info-scenic-location-wrapper
				margin-top rem(.3)
				textStyle(#333333, .3)
				line-height rem(.45)
				display flex
				align-items center
				.s-d-info-scenic-location
					flex 1
				.s-d-info-scenic-phone
					textStyle($primary, .65)
			.s-d-info-scenic-location-icon
				font-size rem(.4)
				margin-right rem(.2)
				vertical-align top
	.sperator-line
		horizontalLine(#f5f5f5, .1)
	.o-i-ticket-safe-container
		background-color #EDF8F7
		border-top rem(.02) solid #DDDFDE
		border-bottom rem(.02) solid #DDDFDE
		padding rem(.2)
		& p
			color $primary
		.o-i-ticket-info-tag
			overflow hidden
			margin-top rem(.2)
			line-height rem(.3)
			& text
				float left
				color #333333
				font-size rem(.2)
				margin-right rem(.3)
				& i
					color $primary
					font-size rem(.2)
</style>
