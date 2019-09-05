<template>
    <view>
        <uni-segement-control :current="mCurrent" :values="items" styleType="text" activeColor="#64BBAE" @clickItem="itemClick"></uni-segement-control>
		<view class="content">
			<view v-show="mCurrent === 0" style="overflow: hidden;">
				<rich-text :nodes="content"></rich-text>
			</view>
			<view v-show="mCurrent === 1" style="overflow: hidden;">
				<rich-text :nodes="detail"></rich-text>
			</view>
		</view>
    </view>
</template>

<script>
import uniSegementControl from '@/componets/uni/uni-segmented-control.vue'
export default {
  name: 'ScenicInfo',
  props: {
    selected: {
      type: String,
      default: 'scenicInfoForIntro'
    }
  },
  components:{
	uniSegementControl  
  },
  data () {
	return {
		mSelected: this.selected ? this.selected : 'scenicInfoForIntro',
		info: null,
		content: null,
		remarks: null,
		images: null,
		tags: null,
		detail: '',
		  items: [
			  '景区须知',
			  '景区详情'
		  ],
		  mCurrent: 0,
		  
	}
  },
  computed: {
	title () {
	return this.mSelected === 'scenicInfoForIntro' ? '景区须知' : '景区详情'
	}
  },
  watch: {
    info (newVal, oldVal) {
      if (newVal instanceof Array) {
        this.remarks = []
        newVal.forEach(item => {
          if (item.title === '景区须知') {
            this.content = item.value
			this.content = this.content.replace(`src="/`, 'src="https://www.liuyiqinzi.com/')
          } else if (item.title === '景区详情') {
            this.detail = item.value
          } else if (item.title === '景区图片') {
            this.images = item.value
            this.remarks.push(item)
          } else {
            this.remarks.push(item)
          }
        })
      }
    }
  },
  methods: {
	showLine (item) {
		return typeof (item.value) === 'string'
	},
	itemClick (current) {
		this.mCurrent = current
	},
	getData () {
		this.$http(this.$urlPath.scenicNotesUrl, {
			s_id: this.$routeParams.scenicId
		}, '', (data) => {
			this.info = data.data
		}, (errorCode, error) => {
			this.$toast(error)
		})
	}
  },
  onLoad() {
	  this.getData()
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.content
	margin-top rpx(66)
	padding rem(.3) rem(.2)
	textStyle(#666, .3)
	overflow hidden
.info-wrapper
	padding rem(.2)
	.s-i-info-title
		padding rem(.1)
		textStyle(#333, .3)
	.s-i-info-line
		padding rem(.1)
		textStyle(#888, .28)
	.image
		width 100%
		float left
		margin rem(.1) 0
	.tag
		margin rem(.1)
</style>
