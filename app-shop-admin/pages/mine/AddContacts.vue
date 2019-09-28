<template>
	<view class="c-container">
        <view>
          <view class="c-a-item-container">
            <text class="c-a-item-left">姓       名:</text>
            <input type="text" placeholder="请输入姓名" maxlength="6" v-model="name">
          </view>
          <view class="c-a-item-container">
            <text class="c-a-item-left">手   机   号:</text>
            <input type="number" placeholder="请输入手机号" maxlength="11" v-model="phone">
          </view>
          <view class="c-a-item-container">
            <text class="c-a-item-left">身份证号:</text>
            <input type="text" placeholder="请输入身份证号" maxlength="18" v-model="idCard">
          </view>
          <view class="c-a-item-container">
            <text class="c-a-item-left">学生名称:</text>
            <input type="text" placeholder="请输入学校名称" maxlength="16" v-model="schoolName">
          </view>
          <view class="c-a-item-container">
            <text class="c-a-item-left">学生证号:</text>
            <input type="text" placeholder="请输入学生证号" maxlength="16" v-model="schoolId">
          </view>
        </view>
		<view class="add-contact" @click="addContacts">{{buttonName}}</view>
    </view>
</template>
<script>
export default {
  name: 'contacts',
  data () {
    return {
		id: null,
		name: '',
		phone: '',
		idCard: '',
		schoolName: '',
		schoolId: '',
		buttonName: '添加'
    }
  },
  methods: {
    addContacts () {
      if (!this.name) {
        this.$toast('请输入姓名')
        return
      }
      if (!this.phone) {
        this.$toast('请输入手机号')
        return
      }
      if (!this.$utils.validator.isPhone(this.phone)) {
        this.$toast('请输入合法的手机号')
        return
      }
	  if (!this.$utils.validator.checkIdCard(this.idCard)) {
	    this.$toast('请输入合法的身份证号')
	    return
	  }
      if (this.id) {
        this.$http(this.$urlPath.editLinkManUrl, {
          l_id: this.id,
          name: this.name,
          mobile: this.phone,
          id_no: this.idCard,
          school: this.schoolName,
          stdnostring: this.schoolId
        }, '正在修改…', (data) => {
          this.$toast('修改成功')
          this.$back()
        }, (error) => {
          this.$toast(error)
        })
      } else {
        this.$http(this.$urlPath.addLinkManUrl, {
          name: this.name,
          mobile: this.phone,
          id_no: this.idCard,
          school: this.schoolName,
          stdnostring: this.schoolId
        }, '正在添加…', (data) => {
          this.$toast('添加成功')
          this.$back()
        }, (error) => {
          this.$toast(error)
        })
      }
    }
  },
  onLoad () {
	this.id = this.$routeParams ? this.$routeParams.id : ''
  	this.name = this.$routeParams ? this.$routeParams.name : ''
  	this.phone = this.$routeParams ? this.$routeParams.mobile : ''
  	this.idCard = this.$routeParams ? this.$routeParams.no : ''
  	this.schoolName = this.$routeParams ? this.$routeParams.school : ''
  	this.schoolId = this.$routeParams ? this.$routeParams.stdnostring : ''
	this.buttonName = this.$routeParams ? '修改' : '添加'
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.c-container
	position relative
	.c-add-action
		color #333333
		font-size rem(.26)
	.c-a-item-container
		borderBottom()
		position relative
		line-height rem(.2)
		display flex
		justify-content left
		align-items center
		.c-a-item-left
			color #333333
			font-size rem(.32)
			margin rem(.5) rem(.2)
			width rem(1.5)
			text-align right
		& input
			flex 1
			min-width 55%
			font-size rem(.3)
			color #666
			margin-right rem(.2)
	.add-contact
		position fixed
		bottom 0
		left 0
		right 0
		text-align center
		line-height rem($headerHeight)
		lgTextStyle(#ffffff)
		background-color $primary
</style>
