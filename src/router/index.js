
import VueRouter from "vue-router";
import Vue from 'vue'
import haha from '@/components/box'



const helloword = ()=> import('@/components/HelloWorld')
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path: '/haha',
      component:haha
    },
    {
      path: '/home',
      component:helloword
    }
  ],
  mode:'history'
})

export default router