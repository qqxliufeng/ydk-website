<template>
    <view class="s-d-l-m-message-container" v-if="ask">
        <view class="s-d-l-m-message-title">
            <view class="message-title" style="font-size: 32rpx; color: #333; font-weight: bold;"><text class="iconfont" style="font-size: 36rpx; color: #ffad2c; margin-right: 10rpx;">&#xe670;</text>留言板</view>
			<view style="flex: 1;"></view>
            <text class="message-count">{{ask.ask_count || 0}}条留言</text>
        </view>
        <view v-if="showEmpty" class="s-d-l-m-message-empty">
            <button size="mini" @click="startLeaveMessage" style="background-color: #ffad2c;color: #FFFFFF;">去留言</button>
        </view>
        <view v-else class="s-d-l-m-message-info-wrapper">
            <ul>
                <li v-for="item of ask.ask_list" :key="item.aid">
                    <view class="s-d-l-m-message-info-item">
                        <text>问</text>
                        <text>{{item.content}}</text>
                        <text>共{{item.answer_count}}条回复</text>
                    </view>
                </li>
            </ul>
            <view class="s-d-l-m-message-info-see-more" @click="seeMoreLeaveMessage">
                查看更多
            </view>
        </view>
    </view>
</template>

<script>
export default {
  name: 'scenicDetailLeaveMessage',
  props: {
    ask: Object
  },
  computed: {
    showEmpty () {
      return !this.ask.ask_list || this.ask.ask_list.length === 0
    }
  },
  methods: {
    seeMoreLeaveMessage () {
		this.$push("/pages/ask/LeaveMessageList?scenicId=" + this.$parent.$routeParams.scenicId)
    },
    startLeaveMessage () {
		this.$emit('leave-message')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.s-d-l-m-message-container
	boxShadow()
	margin rem(.2)
	border-radius rem(.1)
	.s-d-l-m-message-title
		overflow hidden
		padding rem(.2)
		borderBottom()
		display flex
		align-items center
		.message-title
			textStyle(#333, .3)
		.message-count
			textStyle(#888, .25)
	.s-d-l-m-message-empty
		display flex
		justify-content center
		align-items center
		min-height rem(2)
		textStyle(#888, .3)
	.s-d-l-m-message-info-item
		display flex
		align-items center
		padding rem(.2)
		& text:nth-child(1)
			background-color $orangeColor
			color #ffffff
			font-size rem(.25)
			padding rem(.05)
			border-radius rem(.1)
			line-height rem(.28)
		& text:nth-child(2)
			flex 1
			margin 0 rem(.1)
			ellipsis()
			textStyle(#666, .28)
		& text:nth-child(3)
			textStyle(#888, .25)
	.s-d-l-m-message-info-see-more
		textStyle(#666, .28)
		padding rem(.2)
		text-align center
		border-top #f5f5f5 solid rem(.05)
</style>
