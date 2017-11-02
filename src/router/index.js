import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/demo', component: () => import('../views/Demo.vue') },
      { path: '/', component: () => import('../views/Home.vue') }
    ]
  })
}
