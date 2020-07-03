<template>
  <div class="box" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    mounted(){
      this.$on('ceshi',this.fn)
    },
    methods:{
      fn(v){
        // console.log(v)
        this.$parent.$emit('ceshi1',v)
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ededed;
    display: flex;
    flex-direction: row;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);

    div {
      flex: 1;
    }
  }
</style>