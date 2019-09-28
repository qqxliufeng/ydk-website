<template>
    <view class="r-d-user-info-container">
        <view class="r-d-user-info-title">
            <view>
				<text>游客信息</text>
				<label class="tourist-count">(需要提供<label>{{touristCount - 1}}</label>位游客信息)</label>
			</view>
            <view class="select-user-info" @click="selectContact">选择联系人<text class="iconfont">&#xe64c;</text></view>
        </view>
        <view class="r-d-user-info-content-wrapper" v-for="(item, index) of userList" :key="index" :class="{'r-d-user-info-content-selected': item.selected && item.type === 'info'}">
            <text class="r-d-user-info-content" :style="{'color' : item.type === 'add' ? '#64bbae' : '#333'}"  @click="userItemClick(item)" >
				{{item.name}}
            </text>
			<text class="iconfont close-icon" v-if="item.type !== 'add'" @click="userItemDelete(item)">&#xe604;</text>
        </view>
		<uni-popup-wrapper ref="constactWrapper" transition="fade" type="center" width="80%" backgroundColor="#ffffff" height="55%">
			<view class="user-info-wrapper">
				<view>
					请输入游客信息
				</view>
				<view style="flex: 1;display: flex; flex-direction: column; justify-content: center;">
					<view class="r-d-user-info-input-wrapper" v-if="visitorInfo.indexOf('n') !== -1">
						<text>姓名</text>
						<input type="text" placeholder="请输入(1)位游客姓名" v-model="tempUserInfo.name">
					</view>
					 <view class="r-d-user-info-input-wrapper" v-if="visitorInfo.indexOf('m') !== -1">
						<text>手机号</text>
						<input type="number" placeholder="请输入(1)位游客手机号" v-model="tempUserInfo.phone" maxlength="11" style="letter-spacing: 4rpx">
					</view>
					 <view class="r-d-user-info-input-wrapper" v-if="visitorInfo.indexOf('id') !== -1">
						<text>身份证号</text>
						<input type="text" placeholder="请输入(1)位游客身份证号" v-model="tempUserInfo.idCard">
					</view>
					 <view class="r-d-user-info-input-wrapper" v-if="visitorInfo.indexOf('u') !== -1">
						<text>学校</text>
						<input type="text" placeholder="请输入(1)位游客学校" v-model="tempUserInfo.schoolName">
					</view>
					 <view class="r-d-user-info-input-wrapper" v-if="visitorInfo.indexOf('s') !== -1">
						<text>学生证号</text>
						<input type="text" placeholder="请输入(1)位游客学生证号" v-model="tempUserInfo.studentId">
					</view>
				</view>
				<view class="dialog-footer">
					<button @click="cancelUserInfoDialog" size="mini">取 消</button>
					<button type="primary" @click="submitUserInfoDialog" size="mini">确 定</button>
				</view>
			</view>
		</uni-popup-wrapper>
    </view>
</template>

<script>
import uniPopupWrapper from '@/componets/uni/lu-popup-wrapper.vue'
export default {
  name: 'TicketUserInfo',
  props: {
    contacts: Array,
    visitorInfo: String,
    touristCount: Number
  },
  components: {
	  uniPopupWrapper
  },
  data () {
    return {
      showAddUserInfoDialog: false,
      tempUserInfo: {
        name: '',
        phone: '',
        idCard: '',
        schoolName: '',
        studentId: '',
        clear () {
          this.name = ''
          this.phone = ''
          this.idCard = ''
          this.schoolName = ''
          this.studentId = ''
        },
        setInfo (info) {
          this.name = info.name
          this.phone = info.phone
          this.idCard = info.idCard
          this.schoolName = info.schoolName
          this.studentId = info.studentId
        }
      },
      userList: [],
	  addList: [],
	  selectedList: [],
      addItem: {
        name: '+ 新增',
        selected: false,
        type: 'add'
      },
      userMap: {},
	  selectedUserIndex: -1
    }
  },
  watch: {
    contacts (newVal, oldVal) {
		this.selectedList = []
		this.userList = []
        newVal.forEach((it, index) => {
            const contact = {
              name: it.l_name,
              phone: it.l_mobile,
              idCard: it.l_id_no,
              schoolName: it.l_school,
              studentId: it.l_stdnostring,
              selected: false,
              type: 'info'
            }
			this.selectedList.push(contact)
        })
		this.userList = this.userList.concat(this.selectedList, this.addList)
		this.userList.push(this.addItem)
    }
  },
  methods: {
    selectContact () {
      this.$push('/pages/mine/ContactsList?mode=select')
    },
    userItemClick (item) {
      if (item.type === 'add') {
        this.$refs.constactWrapper.show()
        this.tempUserInfo.clear()
        return
      }
      this.userList.forEach(it => {
        it.selected = it === item
      })
	  this.selectedUserIndex = this.userList.indexOf(item)
      this.tempUserInfo.setInfo(item)
      this.$refs.constactWrapper.show()
    },
    userItemDelete (item) {
      uni.showModal({
      	cancelText: '取消',
		confirmText: '删除',
		title: '提示',
		content: '是否要删除此联系人？',
		success: (res) => {
			if (res.confirm) {
				for (let it of this.addList) {
					if (it.name === item.name) {
						this.addList.splice(this.addList.indexOf(it), 1)
					}
				}
				this.userList.splice(this.userList.indexOf(item), 1)
				this.$emit('onDeleteContact', item)
			}
		}
      })
    },
    cancelUserInfoDialog () {
      this.$refs.constactWrapper.close()
      this.tempUserInfo.clear()
    },
    submitUserInfoDialog () {
      if (!this.tempUserInfo.name && this.visitorInfo.indexOf('n') !== -1) {
        this.$toast('请输入姓名')
        return
      }
      if (!this.tempUserInfo.phone && this.visitorInfo.indexOf('m') !== -1) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.tempUserInfo.phone) && this.visitorInfo.indexOf('m') !== -1) {
        this.$toast('请输入合法的手机号')
        return
      }
      if (!this.tempUserInfo.idCard && this.visitorInfo.indexOf('id') !== -1) {
        this.$toast('请输入身份证号')
        return
      }
      if (!this.tempUserInfo.schoolName && this.visitorInfo.indexOf('u') !== -1) {
        this.$toast('请输入学校姓名')
        return
      }
      if (!this.tempUserInfo.studentId && this.visitorInfo.indexOf('s') !== -1) {
        this.$toast('请输入学生证号')
        return
      }
      let info = {
        name: this.tempUserInfo.name,
        phone: this.tempUserInfo.phone,
        idCard: this.tempUserInfo.idCard,
        schoolName: this.tempUserInfo.schoolName,
        studentId: this.tempUserInfo.studentId,
        selected: false,
        type: 'info'
      }
	  if (this.selectedUserIndex !== -1) {
		  this.userList[this.selectedUserIndex] = info
		  this.selectedUserIndex = -1
	  } else {
		  this.userList.unshift(info)
		  this.addList.push(info)
	  }
      this.$refs.constactWrapper.close()
    }
  },
  mounted () {
    this.userList.push(this.addItem)
  }
}
</script>

<style lang="stylus" scoped>
@import '~mixin.styl'
.r-d-user-info-container
	border-top rem(.2) solid #f5f5f5
	.r-d-user-info-title
		padding rem(.3)
		borderBottom()
		display flex
		justify-content space-between
		align-items center
		& text
			textStyle(#333, .3)
		.tourist-count
			textStyle(#666, .25)
			& label
				textStyle($orangeColor, .25)
				font-weight bold
				margin 0 rem(.1)
		.select-user-info
			textStyle($primary, .3)
			& > text
				color $primary
	.r-d-user-info-content-wrapper
		padding 0 rem(.2)
		margin rem(.25) rem(.1)
		border-radius rem(.05)
		border 1px solid $primary
		display inline-block
		position relative
		line-height rpx(40)
		font-size rem(.2)
		.close-icon
			line-height rpx(35)
			margin-left rem(.2)
			color $orangeColor
			vertical-align middle
		.r-d-user-info-content
			color #000
			vertical-align middle
			textStyle(#333, .22)
		.r-d-user-info-content-selected
			color $primary
	.user-info-wrapper
		position: relative
		height: 100% 
		width: 100%
		padding: rem(.2)
		display flex
		flex-direction column
		box-sizing border-box
		.r-d-user-info-input-wrapper
			borderBottom()
			height rem(.5)
			margin-bottom rem(.35)
			width 100%
			display flex
			align-items center
			& text
				flex 1.5
				textStyle(#555555, .3)
				& i
					textStyle(#ccc, .2)
			& input
				flex 3
				font-size rem(.3)
				setPlaceholder(#999)
		.dialog-footer
			display flex
			justify-content space-between
</style>
