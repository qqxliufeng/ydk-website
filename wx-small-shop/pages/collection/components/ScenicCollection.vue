<template>
	<view>
		<view v-for="(item, index) of list" :key="item.fs_id" class="c-item-card">
			<view class="s-c-content-container">
				<view>
					<image :src="$utils.image.getImagePath(item.scenicimages)" mode="aspectFill"></image>
				</view>
				<view class="s-c-info-container">
					<view class="s-c-info-title">{{item.s_title}}</view>
					<view class="s-c-info-info">{{$utils.common.delHtmlTag(item.brief)}}</view>
					<view class='s-c-info-count'>已售{{item.totalSales}}</view>
				</view>
			</view>
			<view class="s-c-line"></view>
			<view class="s-c-bottom-action-container">
				<button size="mini" class="s-c-bottom-action" @click="cancleFavorite(index)">取消收藏</button>
				<button type="primary" size="mini" class="s-c-bottom-action" @click="startScenicInfo(index)">查看详情</button>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
    </view>
</template>

<script>

import ListMixin from '@/mixin/List.js'
export default {
  name: 'scenicCollection',
  mixins: [ListMixin],
  data () {
    return {
		loaded: false
    }
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.userFavoriteScenicUrl, {
        page: this.page.num
      }, null, (data) => {
        this.loadSuccess(data.data)
      }, (errorCode, error) => {
        this.loadFail()
      }, () => {
		  this.loaded = true
		  uni.stopPullDownRefresh()
	  })
    },
    cancleFavorite (index) {
		let item = this.list[index]
		uni.showModal({
			title: '提示',
			content: '是否要取消收藏？',
			confirmText: '取消',
			cancelText: '再想想',
			success: (res) => {
				if (res.confirm) {
					this.$http(this.$urlPath.userUnFavoroteScenicUrl, {
					  scenic_id: item.s_id
					}, '正在取消', (data) => {
					  this.$toast('取消收藏成功')
					  this.list.splice(index, 1)
					}, (errorCode, error) => {
					  this.$toast(error)
					})
				}
			}
		})
    },
	startScenicInfo (index) {
		this.$push(this.$mRouter.scenicDetail({
			scenicId: this.list[index].s_id
		}))
	},
	onRefresh () {
		this.page.num = 1
		this.getData()
	}
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.c-item-card
	boxShadow()
	margin rem(.2)
	padding rem(.2)
	.s-c-content-container
		display flex
		flex-direction row
		& > view:nth-child(1)
			overflow hidden
			height rem(1.5)
			width rem(1.5)
			border-radius rem(.1)
			& image
				width 100%
				height 100%
		.s-c-info-container
			flex 1
			margin-left rem(.1)
			display flex
			flex-direction column
			justify-content space-between
			.s-c-info-title
				color #333
				font-size  rem(.32)
			.s-c-info-info
				display inline-block
				color #888
				font-size  rem(.25)
				margin-top rem( .1)
				line-height rem(.3)
				height rem(.9)
				muitlLineEllipsis(3)
			.s-c-info-count
				display block
				text-align right
				color #aaa
				font-size rem(.2)
				margin-top rem(.1)
	.s-c-line
		border 1px solid #f5f5f5
		margin rem(.3) 0
	.s-c-bottom-action-container
		text-align right
		.s-c-bottom-action
			margin-left rem(.2)
</style>
