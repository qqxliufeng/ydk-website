<template>
	<view class="map-container">
		<map :latitude="36.70572280883789" :longitude="116.87845611572268" :style="{'width': '100%', 'height': height}" :covers="covers" scale="14" show-location @markertap="markerClick"></map>
	</view>
</template>

<script>
export default {
	name: 'map',
	data () {
		return {
			height: 300,
			latitude: 36.70572280883789,
			longitude: 116.87845611572268,
			covers: [{
				latitude: 36.70572280883789,
				longitude: 116.87845611572268,
				iconPath: '../../static/img_location_mark_icon.png'
			}]
		}
	},
	methods: {
		markerClick () {
			uni.getLocation({
				type: 'gcj02',
				success: () => {
					uni.openLocation({
						latitude: 36.70572280883789,
						longitude: 116.87845611572268
					})
				}
			})
		}
	},
	onLoad() {
		console.log(this)
		uni.getSystemInfo({
			success: (res) => {
				this.height = res.windowHeight + 'px'
			}
		})
		uni.chooseLocation({
			keyword: '济南方特',
			success: (res) => {
				console.log(res);
			}
		})
	}
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.map-container
	position relative
</style>
