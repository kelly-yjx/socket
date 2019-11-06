<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item
        :id="item.id"
        v-for="item in tabbar"
        :key="item.name"
        @click.native="tabbarBtn(item)"
      >
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
        {
          name: "消息",
          id: "message",
          url: "message",
          img: require("@/assets/logo.png")
        },
        {
          name: "通信录",
          id: "addressList",
          url: "addressList",
          img: require("@/assets/logo.png")
        },
        {
          name: "我的",
          id: "mine",
          url: "mine",
          img: require("@/assets/logo.png")
        }
      ]
    };
  },
  created(){
    this.selected = this.$route.name
  },
  methods: {
    tabbarBtn(item) {
      this.$router.push({
        name: item.id,
        query:{
          name:item.name
        }
      });
      
    }
  },
 
};
</script>