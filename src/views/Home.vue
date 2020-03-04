<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回</button>
    <button @click="handleClick('push')">跳转</button>
    <button @click="handleClick('replace')">替换</button>
    <div>{{food}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "ass"
    }
  },
  methods: {
    handleClick(type) {
      if (type === "back") {
        this.$router.go(-1);
      } else if (type === "push") {
        // this.$router.push('parent')
        const name = "list";
        this.$router.push({
          // name: "parent",
          // query: {
          //   name: name
          // }
          // path:`/argu/${name}`
          name: "argu",
          params: {
            name: name
          }
          // path: `/parent?name=${name}`
        });
      } else if (type === "replace") {
        this.$router.replace("parent");
      }
    }
  }
};
</script>
