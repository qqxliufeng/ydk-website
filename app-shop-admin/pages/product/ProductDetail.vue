<template>
	<view class="product-detail-container">
		<view class="header">
			<index-swiper :isMarinTop="false" :list="list"></index-swiper>
		</view>
		<tab :tabList="tabList" :iconShow="false" ref="barTabNav" barHeight="40">
			<view id="item1" class="tabbody" style="padding: 20rpx;">
				<rich-text :nodes="nodeArray"></rich-text>
			</view>
			<view id="item2" class="tabbody">
				产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br> 产品内容2<br>
			</view>
			<view id="item3" class="tabbody">
				产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br>
			</view>
			<view id="item4" class="tabbody">
				产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br> 产品内容3<br>
			</view>
		</tab>
	</view>
</template>

<script>
import Tab from '@/componets/uni/lu-bar-tab-nav.vue'
import IndexSwiper from '@/pages/index/componets/IndexSwiper.vue'
import HTMLParser from '@/utils/htmlParse.js'
export default {
	name: 'productDetail',
	components: {
		Tab,
		IndexSwiper
	},
	data () {
		return {
			tabList: [
				    {
						text: "产品说明",
						navTarget: "#item1",
						iconClass: "icon01",
						iconImage: "",
						selectedIconClass: "",
						selectedIconImage: ""
					},
					{
						text: "费用说明",
						navTarget: "#item2",
						iconClass: "icon02",
						iconImage: "",
						selectedIconClass: "",
						selectedIconImage: ""
					},
					{
						text: "预定须知",
						navTarget: "#item3",
						iconClass: "icon01",
						iconImage: "",
						selectedIconClass: "",
						selectedIconImage: ""
					},
					{
						text: "评价留言",
						navTarget: "#item4",
						iconClass: "icon03",
						iconImage: "",
						selectedIconClass: "",
						selectedIconImage: ""
					}
				],
			list: [
				{
					create_time_text: "",
					id: 4,
					image: "/uploads/20190924/008eccd497848362261fd91ec400c718.jpg",
					scenic_id: 1,
					status_text: "",
					title: "欧乐堡",
					update_time_text: ""
				},
				{
					create_time_text: "",
					id: 3,
					image: "/uploads/20190924/a8cb234433b0081893ec08acc4ad7860.jpg",
					scenic_id: 1,
					status_text: "",
					title: "九如山",
					update_time_text: ""
				},
				{
					create_time_text: "",
					id: 2,
					image: "/uploads/20190924/2df40224a987c259b7c2e5df11bc8b9f.jpg",
					scenic_id: 1,
					status_text: "",
					title: "方特",
					update_time_text: ""
				},
				{
					create_time_text: "",
					id: 1,
					image: "/uploads/20190924/52a9b3974239fb6895011822865bb8ac.jpg",
					scenic_id: 1,
					status_text: "",
					title: "红叶谷",
					update_time_text: ""
				}
			],
			node: '<div><p>这是一个文本</p><img style="width: 100%" src="https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt=""></div>'
		}
	},
	computed: {
		nodeArray () {
			return HTMLParser(this.node)
		}
	},
	onPageScroll (e) {
		this.$refs.barTabNav._selectedTab(e.scrollTop);
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
// .product-detail-container
// 	.header
// 		height rem(2)
</style>
