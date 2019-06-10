<template>
<div class='p-container' @click="other">
  测试personal
</div>
</template>

<script>

export default {
  name: 'personal',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    other () {
      this.$router.push({name: 'other'})
    }
  },
  beforeRouteEnter (to, from, next) {
    next(() => {
      if (to.meta.keepAlive) {
        if (to.meta.jumpType === 'push') {
          console.log('push 过来的  要更新 ')
        } else if (to.meta.jumpType === 'back') {
          console.log('back 过来的  不用更新')
        } else {
          console.log('replace 过来的，得更新')
        }
      } else {
        console.log('没有被保存，自动更新')
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('update')
    next()
  }
}
</script>
<style scoped>
</style>
