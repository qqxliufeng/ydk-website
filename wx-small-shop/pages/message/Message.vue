<template>
	<view class="content">
          <view v-for="item of list" :key="item.id" class="m-tabs-item-li" @click="itemClick(item)">
              <view class="m-s-title-container">
                <view class="m-s-title"><text v-show="!item.is_read"></text>{{item.title}}</view>
                <text class="m-s-time">{{item.create_time}}</text>
              </view>
          </view>
		  <load-more :status="loadingType"></load-more>
     </view>
</template>
<script>
import listMixin from '@/mixin/List.js'
export default {
	name: 'message',
	mixins: [listMixin],
	methods: {
	getData () {
		this.$http(this.$urlPath.messageList, {
			page: this.page.num
		}, null, (data) => {
			this.loadSuccess(data.data)
		}, (errorCode, error) => {
			this.loadError()
		}, () => {
			uni.stopPullDownRefresh()
		})
	},
	itemClick (item) {
		item.is_read = true
		this.$push('/pages/message/MessageInfo?mid=' + item.id)
	}
	},
	onLoad () {
		uni.startPullDownRefresh()
	}
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.content
	.m-tabs-item-li
		borderBottom()
		padding rem(.2)
		.m-s-title-container
			overflow hidden
			display flex
			align-items center
			justify-content space-between
		.m-s-title
			flex 1
			color #333333
			font-size rem(.32)
			ellipsis()
			& text
				border-radius 50%
				background-color $primary
				width rem(.1)
				height rem(.1)
				display inline-block
				margin-bottom rem(.06)
				margin-right rem(.2)
		.m-s-time
			color #888888
		.m-s-content
			display inline-block
			margin-top rem(.2)
			color #6F6F6F
			font-size rem(.25)
			line-height rem(.32)
			height rem(1.28)
			overflow hidden
			text-overflow ellipsis
			display -webkit-box
			-webkit-box-orient vertical
			-webkit-line-clamp 4
</style>
