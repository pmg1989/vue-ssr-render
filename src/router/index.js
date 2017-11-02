import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Demo = () => import('../views/Demo.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/demo', component: Demo },
      // { path: '/', redirect: '/demo' }
    ]
  })
}
