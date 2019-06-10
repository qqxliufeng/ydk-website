<template>
<div class='p-container' @click="back">
  other
</div>
</template>

<script>

export default {
  name: 'other',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
</style>
