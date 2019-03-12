import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/Home.vue')
    },
    {
      path: '/twoWayBinding',
      name: 'twoWayBinding',
      component: () => import('./views/TwoWayBinding.vue')
    },
    {
      path: '/computedProperties',
      name: 'computedProperties',
      component: () => import('./views/ComputedProperties.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/Vuex.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/ToDo.vue')
    },    
  ]
})
