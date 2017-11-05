import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/item/:id', component: () => import('../views/Item.vue') },
      { path: '/vote', component: () => import('../views/Vote.vue') },
      { path: '/foo', component: () => import('../views/Foo.vue') },
      { path: '/', component: () => import('../views/Home.vue') }
    ]
  })
}
