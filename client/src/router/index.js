import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import QA   from '@/components/QA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/qa',
      name: 'QA',
      component: QA
    }
  ]
})
