<template>
  <view>
     <search-header @search="search"></search-header>
     <search-tip v-if="showTip" @search="search"></search-tip>
     <search-list v-else :resultList="resultList"></search-list>
  </view>
</template>
<script>
import SearchHeader from './components/SearchHeader'
import SearchTip from './components/SearchTip'
import SearchList from './components/SearchList'
export default {
  name: 'login',
  components: {
    SearchHeader,
    SearchTip,
    SearchList
  },
  data () {
    return {
      showTip: true,
      resultList: null
    }
  },
  methods: {
    search (content) {
      this.showTip = false
      this.getData(content)
    },
    getData (content) {
      this.$http(this.$urlPath.runSeacher, {
        identity: this.$ids.identity,
        store_id: this.$ids.storeId,
        key: content
      }, '', (data) => {
        this.resultList = data.data
      }, (errorCode, error) => {
        this.$toast(error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.this-is-c-dev-branch
	overflow hidden
	height 100%
</style>
