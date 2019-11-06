<template>
  <div class="List">
    <mt-index-list>
      <mt-index-section :index="item.title" v-for="item in data" :key="item.title">
        <li v-for="(li,index) in item.list" :key="index">
          <div class="imgBox">
            <img :src="li.url" alt />
          </div>
          <div class="message">
            <span>{{li.name}}</span>
          </div>
        </li>
      </mt-index-section>
    </mt-index-list>

    <myHeader></myHeader>
    <myFooter></myFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "@/page/layout/header.vue";
import myFooter from "@/page/layout/footer.vue";

var pinyin = require("pinyin");

export default {
  components: { myHeader, myFooter },
  created() {
    const i = "我是清风";
    const a = "袁嘉兴";
    console.log(pinyin.compare(a, i));
  },
  data() {
    return {
      data: [
        {
          title: "A",
          list: [
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "徐来",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "小风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            }
          ]
        },{
            title: "B",
          list: [
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "徐来",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "小风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            }
          ]
        },{
            title: "C",
          list: [
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "徐来",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "小风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            }
          ]
        },{
            title: "D",
          list: [
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "徐来",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "小风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            }
          ]
        },{
            title: "E",
          list: [
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "徐来",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "清风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            },
            {
              name: "小风",
              url: "https://avatars2.githubusercontent.com/u/39786949?s=460&v=4"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.List {
  margin-bottom: 55px;
  .mint-indexsection-index {
    background: rgb(226, 221, 221);
    font-size: 14px;
  }
  .mint-indexlist-content {
    margin-right: 0 !important;
  }
  .mint-indexsection {
    ul {
      li {
        height: 50px;
      }
      li:last-child .message{
          border:0 none;
      }
    }
  }
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
  }
  .message {
    width: 85%;
    float: left;
    font-size: 16px;
    line-height: 49px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
        box-sizing: border-box
  }
  .mint-indexlist-nav {
    background: none;
    z-index: 999;
    border: none 0;
    position: absolute;
    height: 400px;
    top: 100px;
  }
}
</style>