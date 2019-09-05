<template>
	<view class="c-container">
		<view class="c-item-container" v-if="contactsList && contactsList.length > 0">
			<uni-swipe-action :options="item.options" v-for="item of contactsList" :key="item.l_id" @click="bindClick" :disabled="mode === 'select'">
				<view class="c-item-content" @click="itemClick(item)">
					<p>联系人：{{item.l_name}}</p>
					<p>手机号：{{item.l_mobile}}</p>
				</view>
			</uni-swipe-action>
			<view class="c-add-new-container" @click="addContact" v-if="mode === 'edit'">
				添加联系人
			</view>
		</view>
		<view v-else class="empty-list">
			<view>
			暂无联系人
			</view>
		  <view>
		  	<button type="primary" class="add-contact" size="mini" @click="addContact" v-if="mode === 'edit'">立即添加</button>
		  </view>
		</view>
	</view>
</template>
<script>
import uniSwipeAction from '@/componets/uni/uni-swipe-action.vue'
export default {
  name: 'contactsList',
  data () {
	return {
		contactsList: null,
		selectContacts: [],
		mode: ''
    }
  },
  components: {
	uniSwipeAction
  },
  methods: {
    itemClick (tempItem) {
		if (this.mode === 'edit') {
			this.$push('/pages/mine/AddContacts?id=' + tempItem.l_id + '&name=' + tempItem.l_name + '&mobile=' + tempItem.l_mobile +'&no=' + tempItem.l_id_no +'&school=' + tempItem.l_school+ '&stdnostring=' + tempItem.l_stdnostring)
		} else {
			getApp().globalData.contact = tempItem
			this.$back()
		}
    },
	deleteContacts (tempItem) {
      this.$http(this.$urlPath.deleteLinkManUrl, {
        l_id: tempItem.l_id
      }, '正在删除…', (data) => {
        this.$toast('删除成功')
        this.getData()
      }, (error) => {
        this.$toast(error)
      })
    },
	bindClick (item) {
		const tempItem = this.contactsList[item.itemIndex]
		if (item.index === 0) {
			this.$push('/pages/mine/AddContacts?id='+ tempItem.l_id +'&name=' + tempItem.l_name + '&mobile='+ tempItem.l_mobile +'&no='+ tempItem.l_id_no +'&school=' +tempItem.l_school+ '&stdnostring=' + tempItem.l_stdnostring)
		} else {
			uni.showModal({
				title: '提示',
				content: '是否要删除此联系人？',
				confirmText: '删除',
				cancelText: '取消',
				success: (res) => {
					if (res.confirm) {
						this.deleteContacts(tempItem)
					}
				}
			})
		}
	},
	addContact () {
		this.$push('/pages/mine/AddContacts')
	},
    getData () {
      this.$http(this.$urlPath.linkManUrl, {}, '加载中…', (data) => {
        if (data.data) {
          data.data.forEach(item => {
            item.isChecked = false
          })
          this.contactsList = data.data
		  this.contactsList.forEach((item, index) => {
			  item.options = [{
					text: '编辑',
					style: {
						backgroundColor: '#F5F5F5',
						color: '#333'
					},
					index: index
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					},
					index: index
				}]
		  })
        }
      }, (error) => {
        console.log(error)
      })
    }
  },
  onShow () {
    this.getData()
  },
  onLoad() {
  	this.mode = this.$routeParams.mode
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.c-container
	position relative
	.c-delete-action
		color #333333
		font-size rem(.26)
	.c-item-container
		.c-item-content
			borderBottom()
			padding rem(.2)
			& p:nth-child(1)
				color #333333
				font-size rem(.32)
			& p:nth-child(2)
				color #888888
				font-size rem(.3)
				margin-top rem(.2)
		.c-add-new-container
			text-align center
			baseTextStyle($primary)
			margin-top rem(.3)
		.confirm
			background $primary
			text-align center
			color #fff
			width 80%
			font-size rem(.35)
			margin rem(.3) auto
			padding rem(.2)
			border-radius rem(.2)
	.empty-list
		textStyle(#888, .32)
		height 95vh
		display flex
		flex-direction column
		justify-content center
		align-items center
		.add-contact
			margin 0 auto
			margin-top rem(.2)
</style>
