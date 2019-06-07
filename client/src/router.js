import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bug from './views/Bug.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: ':id',
      name: 'bug',
      component: Bug
    }

  ]
})
