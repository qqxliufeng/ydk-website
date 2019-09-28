<template>
<div class='h-n-notice-container'>
    <text>公告：{{title}}</text>
    <text style="color: #888888;" @click="noticeDetail">详情<text class="iconfont">&#xe64c;</text></text>
</div>
</template>

<script>

export default {
  name: 'homeNotice',
  props: ['title', 'identity', 'storeId'],
  data () {
    return {
    }
  },
  methods: {
    noticeDetail () {
		uni.navigateTo({
			url: '/pages/notice/NoticeDetail'
		})
    }
  }
}
</script>
<style lang='scss' scoped>
.h-n-notice-container{
    border-top: #f5f5f5 solid 10rpx;
    border-bottom: #f5f5f5 solid 10rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    & text:nth-child(1) {
        @include ellipsis();
        @include textStyle(#333, $uni-font-size-base);
        flex: 1;
	}
    & text:nth-child(2){
        @include textStyle(#333, $uni-font-size-base);
	}
}
</style>
