<template>
  <div>
    <mt-header fixed title="vueChar">
      <mt-button icon="search" slot="right"></mt-button>
      <mt-button  slot="left">{{name}}</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'消息'
    }
  },
  created(){
   this.name = this.$route.query.name
  }
};
</script>

<style  scoped>
.mint-header {
  font-size: 20px;
}
</style>