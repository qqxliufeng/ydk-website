<template>
	<view>
		<view v-for="(item, index) of list" :key="item.id" class="c-item-card">
			<view class="s-t-content-container">
				<view>
					<image :src="$utils.image.getImagePath(item.scenicimages)" mode="aspectFill"></image>
				</view>
				<view class="s-t-info-container">
					<text class="s-t-info-title">{{item.goodsTitle}}</text>
					<view class="s-t-info-price"><text>￥</text><text>{{item.minPrice}}</text><text>起</text></view>
				</view>
			</view>
			<view class="s-c-line"></view>
			<view class="s-c-bottom-action-container">
				<button type="primary" size="mini" class="s-c-bottom-action" @click="ticketDetail(index)">查看详情</button>
				<button size="mini" class="s-c-bottom-action" @click="cancelCollection(index)">取消收藏</button>
			</view>
		</view>
		<load-more :status="loadingType"></load-more>
	</view>
</template>

<script>
import ListMixin from '@/mixin/List.js'
export default {
  name: 'ticketCollection',
  mixins: [ListMixin],
  data() {
  	return {
  		loaded: false
  	}
  },
  methods: {
    getData () {
      this.$http(this.$urlPath.userFavoriteGoodsUrl, {
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
    cancelCollection (index) {
		let item = this.list[index]
		uni.showModal({
			title: "提示",
			content: "是否要取消收藏？",
			confirmText: "取消",
			cancelText: "再想想",
			success: (res)=> {
				if (res.confirm) {
					this.$http(this.$urlPath.userUnFavoroteGoodsUrl, {
					goods_id: item.goods_id
				}, '正在操作…', (data) => {
					this.$toast('取消收藏成功')
					this.list.splice(index, 1)
				}, (errorCode, error) => {
					this.$toast(error)
				})
			}
		}
		})
    },
    ticketDetail (index) {
		let item = this.list[index]
		this.$push(this.$mRouter.ticketDetail({
			scenicId: item.scenicId,
			goodsId: item.goods_id
			// goodsSource: item.goods_source
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
	.s-t-content-container
		display flex
		overflow hidden
		& view:nth-child(1)
			height rem(1.5)
			width rem(1.5)
			overflow hidden
			border-radius rem(.1)
			& image
				width 100%
				height 100%
		.s-t-info-container
			flex 3
			padding-left rem(.1)
			box-sizing border-box
			display flex
			flex-direction column
			justify-content space-between
			.s-t-info-title
				color #333333
				font-size rem(.3)
				line-height rem(.35)
			.s-t-info-remark
				line-height rem(.3)
				color #888888
				font-size rem(.25)
				margin rem(.2) 0
			.s-t-info-price
				& text:nth-child(1)
					color $primary
					font-size rem(.2)
				& text:nth-child(2)
					color $primary
					font-size rem(.35)
				& text:nth-child(3)
					color #cccccc
					font-size rem(.2)
	.s-c-line
		border  rem(.01) solid #f5f5f5
		margin rem(.2) 0
	.s-c-bottom-action-container
		line-height rem(.7)
		overflow hidden
		.s-c-bottom-action
			float right
			margin-left rem(.1)
		& text
			color #EFA184
			font-size  rem(.25)
			align-self center
			float left
</style>
