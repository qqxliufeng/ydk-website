import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/components/Other')
    }
  ]
})
