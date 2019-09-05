<template>
    <view>
       <view class="p-i-ul">
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">头像</text>
                   <image class="avatar p-i-right" :src="$utils.image.getImagePath(avatar)" mode="aspectFill"></image>
               </view>
           </view>
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">用户名</text>
				   <view class="p-i-right">
						<input placeholder="请输入用户名" maxlength="20" v-model="userName"/>
				   </view>
               </view>
           </view>
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">真实姓名</text>
                   <view class="p-i-right">
                   	  <input placeholder="请输入真实姓名" maxlength="5" v-model="realName"/>
                   </view>
               </view>
           </view>
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">email</text>
				   <view class="p-i-right">
						<input placeholder="请输入邮箱" maxlength="20" v-model="email"/>
				   </view>
               </view>
           </view>
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">性别</text>
                   <view class="p-i-right">
					   <radio-group @change="genderChange">
						   <label class="radio"><radio color="#64bbae" value="0" :checked="sex === 0">男</radio></label>
						   <label class="radio"><radio color="#64bbae" value="1" :checked="sex === 1">女</radio></label>
					   </radio-group>
                   </view>
               </view>
           </view>
           <view>
               <view class="p-i-item">
                   <text class="p-i-left">QQ</text>
				   <view class="p-i-right">
						<input placeholder="请输入QQ号" maxlength="12" v-model="qq"/>
				   </view>
               </view>
           </view>
           <view>
               <view class="p-i-item" @click="selectCity">
                   <text class="p-i-left">所在城市</text>
                   <text class="p-i-right" style="color: #666666;">{{location || '暂无'}}</text>
               </view>
           </view>
       </view>
       <button class="p-i-submit" @click="submit">确定</button>
	   <mpvue-picker 
			ref="mpvuePicker" 
			mode="multiLinkageSelector" 
			deepLength="2" 
			:pickerValueDefault="pickerValueDefault" 
			@onConfirm="onConfirm"
			:pickerValueArray="pickerValueArray">
	   </mpvue-picker>
    </view>
</template>
<script>
import cityData from '@/componets/uni/city/city-data/city.data.js'
import mpvuePicker from '@/componets/uni/city/mpvuePicker.vue'
export default {
  name: 'personalInfo',
  data () {
    return {
		pickerValueDefault: [0, 0],
		pickerValueArray: cityData,
		avatar: this.$userInfo.state.avatar,
		userName: this.$userInfo.state.username,
		realName: this.$userInfo.state.realname,
		email: this.$userInfo.state.email,
		qq: this.$userInfo.state.qq,
		sex: parseInt(this.$userInfo.state.gender),
		location: this.$userInfo.state.province ? this.$userInfo.state.province + '-' +this.$userInfo.state.city : '暂无',
		province: '',
		city: ''
    }
  },
  components:{
	mpvuePicker
  },
  methods: {
    selectCity () {
      this.$refs.mpvuePicker.show()
    },
	onConfirm (city) {
		if (city) {
			let citys = city.label.split('-')
			this.province = citys[0]
			this.city = citys[1]
			this.location = city.label
		}
	},
	genderChange (value) {
		this.sex = Number(value.detail.value)
	},
    submit () {
      if (!this.userName) {
        this.$toast('用户名不能为空')
        return
      }
      if (this.email) {
        if (!this.$utils.validator.isEmail(this.email)) {
          this.$toast('请输入合法的邮箱')
          return
        }
      }
      this.$http(this.$urlPath.userInfoResetInfo, {
        username: this.userName,
        realname: this.realName,
        avatar: this.$userInfo.state.avatar,
        email: this.email,
        gender: this.sex,
        qq: this.qq,
        province: this.province,
        city: this.city
      }, '正在修改…', (data) => {
        this.$toast(data.msg)
		this.$userInfo.state.username = this.userName
		this.$userInfo.state.realname = this.realName
		this.$userInfo.state.gender = this.sex
		this.$userInfo.state.province = this.province
		this.$userInfo.state.city = this.city
		this.$userInfo.state.qq = this.qq
		this.$userInfo.state.email = this.email
		this.$userInfo.saveUserInfo(this.$userInfo.state)
        // if (this.userName) {
        //   this.$userInfo.setUserInfoName(this.userName)
        // }
        // this.$userInfo.setUserInfoRealName(this.realName)
        // this.$userInfo.setUserInfoEmail(this.email)
        // this.$userInfo.setUserInfoGender(this.sex)
        // this.$userInfo.setUserInfoQQ(this.qq)
        // this.$userInfo.setUserInfoCity(this.location)
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~mixin.styl'
.p-i-ul
	margin-top rem(.5)
	.p-i-item
		borderBottom()
		padding 0 rem(.2)
		overflow hidden
		display flex
		flex-direction row
		align-items center
		justify-content space-between
		height rem(1.2)
		.avatar
			width rem(.8)
			height rem(.8)
			border-radius 50%
		.p-i-left
			color #333333
			font-size rem(.32)
		.p-i-right
			font-size rem(.32)
			text-align right
			.radio
				margin-left rem(.4)
				color #333333
		.p-i-text
			color #888888
			font-size rem(.3)
			padding rem(.2) 0
			box-sizing border-box
		.p-i-sex
			float right
			margin-right rem(.2)
.p-i-submit
	display block
	width 80%
	border-radius rem(2)
	background-color $primary
	height rem(.8)
	margin 0 auto
	margin-top rem(1)
	color #ffffff
	font-size rem(.32)
</style>
