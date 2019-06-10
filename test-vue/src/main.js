// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$vRouterPush = function (route) {
  this.$router.push(route)
}

Vue.prototype.$vRouterReplace = function (route) {
  this.$router.replace(route)
}

router.afterEach(route => {
  if (route.meta.jumpType === 'push' || route.meta.jumpType === 'replace') {
    route.meta.jumpType = 'back'
  } else if (route.meta.jumpType === 'back') {
    route.meta.jumpType = 'push'
  } else {
    route.meta.jumpType = 'replace'
  }
  console.log(route)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
