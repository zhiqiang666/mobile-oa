<template>
  <div>
    <h1>I AM StoreT</h1>
    <button @click="handleChangeTel">改变tel</button>
    <h3>myTel:{{myTel}}</h3>
    <h3>verson:{{appVersion}}</h3>
    <button @click="handleChangeUserName">改变userName</button>
    <h3>userName:{{userName}}</h3>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(["myTel", "appVersion"]),
    ...mapState({
      appVersion: state => state.appVersion,
      myTel: state => state.myTel,
      todoList: state => state.todo ? state.todo.todoList : []
    }),
    ...mapState("user", ["userName"]),
    userName() {
      return this.$store.state.user.userName;
    }
    // myTel() {
    //   return this.$store.state.myTel;
    // }
    // ...mapMutations([
    //   'setMyTel'
    // ]),
  },
  methods: {
    ...mapMutations("user", ["SET_USER_NAME"]),
    ...mapMutations(["setMyTel"]),
    // ...mapMutations('user',[
    //   'setUserName',
    // ]),
    // ...mapMutations('user',[
    //   'setUserName'
    // ]),
    handleChangeTel() {
      // this.$store.commit("setMyTel", "dddd");
      // this.$store.commit('setMyTel', {
      //   setMyTel: 'asdasd'
      // });
      this.setMyTel("110");
      this.$store.commit("setApp");
      console.log(this.$store);
    },
    handleChangeUserName() {
      this.SET_USER_NAME("zhangsan");
    },
    registerModule() {
      this.$store.registerModule('todo', {
        state: {
          todoList: ["动态", "注册", "vuex"]
        }
      });
      console.log(this.$store)
    }
  }
};
</script>
