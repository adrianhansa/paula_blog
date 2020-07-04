import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '@/firebase/init'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/admin/auth/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/admin/auth/Login.vue')
  },
  {
    path: '/admin/posts',
    name: 'postsManagement',
    component: () => import('@/components/admin/posts/Posts.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //check to see if route require auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    if (auth.currentUser) {
      //user singed in, proceed to route
      next()
    } else {
      next({ name: "login" })
    }
  } else {
    next()
  }
})

export default router
