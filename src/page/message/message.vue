<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="imgBox">
          <img src="@/assets/logo.png" alt />
        </div>
        <div class="message">
            
        </div>
      </li>
    </ul>
    <myHeader></myHeader>
    <myFooter></myFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "@/page/layout/header.vue";
import myFooter from "@/page/layout/footer.vue";

export default {
components: { myHeader, myFooter },
data(){
    return {
        data:[{
            name:'清风',
            message:'有一条新消息',
            date:'2019-12-24',
            list:[{},{},{}]
        },{
            name:'清风',
            message:'有一条新消息',
            date:'2019-12-24',
            list:[{},{},{}]
        },{
            name:'清风',
            message:'有一条新消息',
            date:'2019-12-24',
            list:[{},{},{}]
        },{
            name:'清风',
            message:'有一条新消息',
            date:'2019-12-24',
            list:[{},{},{}]
        }]
    }
}
};
</script>


<style lang="scss" scoped>
ul {
  li {
    height: 50px;
    background: #ccc;
    .imgBox {
      width: 50px;
      height: 50px;
      float: left;
    }
    img {
      width: 30px;
      text-align: center;
      margin: 10px 0 0 10px;
    }
  }
}
</style>