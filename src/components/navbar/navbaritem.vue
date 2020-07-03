<template>
  <div class="navbaritem" :class="active?'active':''"  @click="dianwole">
    <i :class="icon"></i>
    <span>{{txt}}</span>
  </div>
</template>

<script>
  export default {
    name: "navbaritem",
    props: {
      txt: {
        type: String,
        default: '占位符'
      },
      icon: {
        type: String,
        default: 'el-icon-loading'
      },
      active: {
        type:Boolean,
        default:false
      },
      key1:{
        type:Number
      }
    },
    data() {
      return {
      }
    },
    methods:{
      dianwole(){
        // console.log(this.key1)
        this.$parent.$emit('ceshi',this.key1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbaritem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
      font-size: 26px;
    }

    span {
      font-size: 13px;
    }
  }
  .active{

    i{
      color: coral !important;
    }
    span{
      color: coral !important;
    }
  }
</style>