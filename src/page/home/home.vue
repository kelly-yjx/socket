<template>
  <div>
    <mt-header fixed title="vueChar">
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item :id="item.id" v-for="item in tabbar" :key="item.name" @click.native="tabbarBtn(item)">
        <img slot="icon" :src="item.img" />
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "message",
      tabbar: [
        { name: "消息", id: "message", url: "message", img: require("@/assets/logo.png") },
        { name: "通信录", id: "addressList", url: "addressList", img: require("@/assets/logo.png") },
        { name: "我的", id: "mine", url: "mine", img: require("@/assets/logo.png") }
      ]
    };
  },
  methods: {
   tabbarBtn(item){
     this.$router.push({
       path:item.url
     })
   }
  },
  
};
</script>

<style  scoped>
.mint-header {
  font-size: 20px;
}
</style>