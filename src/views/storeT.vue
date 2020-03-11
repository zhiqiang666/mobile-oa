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
    <button @click="handleActionsTel">actions修改tel</button>
    <button @click="handleActionsUserName">module改变username</button><br>
    <!-- <input v-model="stateValue" /> -->
    <input :value="stateValue" @input="handleStateValue" type="text">
    <p>stateValue:{{stateValue}}</p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(["myTel", "appVersion"]),
    ...mapState({
      appVersion: state => state.appVersion,
      stateValue: state => state.stateValue,
      myTel: state => state.myTel,
      todoList: state => (state.todo ? state.todo.todoList : []),
    }),
    ...mapState("user", ["userName"]),
    userName() {
      return this.$store.state.user.userName;
    },
    // stateValue:{
    //   get(){
    //     return this.$store.state.stateValue
    //   },
    //   set(value){
    //     this.setStateValue(value)
    //   }
    // }
    // myTel() {
    //   return this.$store.state.myTel;
    // }
    // ...mapMutations([
    //   'setMyTel'
    // ]),
  },
  methods: {
    ...mapMutations("user", ["SET_USER_NAME"]),
    ...mapMutations(["setMyTel","setStateValue"]),
    ...mapActions(["updateTel"]),
    ...mapActions("user", ["updateUserName"]),
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
      this.$store.registerModule("todo", {
        state: {
          todoList: ["动态", "注册", "vuex"]
        }
      });
    },
    handleActionsTel() {
      this.updateTel();
      // this.$store.dispatch('updateTel','asd')
    },
    handleActionsUserName() {
      this.updateUserName();
    },
    handleStateValue(e){
      this.setStateValue(e.target.value)
    }
  }
};
</script>
