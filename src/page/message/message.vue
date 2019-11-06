<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <div class="imgBox">
          <img src="@/assets/logo.png" alt />
          <span>{{item.list.length}}</span>
        </div>
        <div class="message">
          <span>{{item.name}}</span>
          <p>{{item.message}}</p>
        </div>
        <div class="date">
          <p>{{item.date}}</p>
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
  data() {
    return {
      data: [
        {
          name: "清风",
          message: "有一条新消息",
          date: "2019-12-24",
          list: [{}, {}, {}]
        },
        {
          name: "清风",
          message: "有一条新消息",
          date: "2019-12-24",
          list: [{}, {}, {}]
        },
        {
          name: "清风",
          message: "有一条新消息",
          date: "2019-12-24",
          list: [{}, {}, {}]
        },
        {
          name: "小风",
          message: "有一条新消息",
          date: "2019-12-24",
          list: [{}, {}]
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
ul {
  li {
    height: 50px;
    background: #ccc;
    margin-bottom: 1px;
    .imgBox {
      width: 15%;
      height: 50px;
      float: left;
      position: relative;
      img {
        width: 30px;
        left: 50%;
        position: absolute;
        top: 50%;
        margin-top: -15px;
        margin-left: -15px;
      }
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: red;
        border-radius: 50%;
        text-align: center;
        color: white;
        line-height: 15px;
        position: absolute;
        right: 5px;
        top:2px;
        font-size: 12px;
      }
    }
    .message {
      width: 65%;
      float: left;
      font-size: 16px;
      margin-top: 8px;
      p {
        font-size: 12px;
        margin-top: 2px;
      }
    }
    .date {
      width: 20%;
      float: left;
      font-size: 12px;
      margin-top: 8px;
      span {
      }
    }
  }
}
</style>