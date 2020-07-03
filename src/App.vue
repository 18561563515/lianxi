<template>
  <div id="app">
    <router-view ></router-view>
    <navbar>
      <navbaritem v-for="(i,index) in arr" :key="index" :icon="i.icon" :txt="i.txt" :active="i.active"  :key1="index" :path="i.path"></navbaritem>
    </navbar>
<!--    <div class="box1"></div>-->
<!--    <router-link to="/home" >HelloWorld</router-link>-->
<!--    <router-link to="/haha" >box</router-link>-->
  </div>
</template>

<script>
  import navbar from '@/components/navbar/navbar.vue'
  import navbaritem from "@/components/navbar/navbaritem";

  export default {
    name: 'App',
    components: {
      navbar,
      navbaritem
    },
    data() {
      return {
        arr: [
          {
            icon: 'el-icon-s-home',
            txt: '首页',
            active:true,
            path:'/home'
          },
          {
            icon: 'el-icon-s-check',
            txt: '用户',
            active:false,
            path:'/cart'
          },
          {
            icon: 'el-icon-s-opportunity',
            txt: '查询',
            active:false,
            path:'/profile'
          },
          {
            icon: 'el-icon-s-promotion',
            txt: '社交',
            active:false,
            path:'/map'
          }
        ]
      }
    },
    mounted(){
      this.$on('ceshi1',this.fn)
    },
    methods:{
      fn(v) {
        console.log(v)
        for (let argument of this.arr) {
          argument.active = false
        }
        this.arr[v].active = true
      }
    }
  }
</script>

<style>
  @import url('static/css/comment.css');

  #app {
    width: 900px;
    margin: 0 auto;
    background: azure;
  }
  .box1{
    width: 20px;
    height: 40px;
    background: #2c3e50;
  }
</style>
