
import VueRouter from "vue-router";
import Vue from 'vue'
// import haha from '@/components/box'



// const helloword = ()=> import('@/components/HelloWorld')
const home = ()=> import('@/views/home/home')
const cart = ()=> import('@/views/cart/cart')
const profile = ()=> import('@/views/profile/profile')
const map = ()=> import('@/views/map/map')
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/cart',
      component:cart
    },
    {
      path: '/profile',
      component:profile
    },
    {
      path: '/map',
      component:map
    },
  ],
  mode:'history'
})

export default router