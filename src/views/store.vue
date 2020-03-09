<template>
  <div>
    <a-input v-model="childMessage" />
    <p>子组件传来的值:{{childMessage}}</p>
    <a-input v-on:childFn="parentFn" />
    <p>子提交的值:{{submitMesssgae}}</p>
    <a-bout v-bind:paramValue="childValue" :paramValue2="childValue2" :paramValue3="childvalue3"></a-bout>
    <input @input="handleParent" />
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import ABout from "./About";
export default {
  name: "store",
  data() {
    return {
      childMessage: "",
      submitMesssgae: "",
      childValue: "这是父亲给子的值",
      childValue2: "你要收到哦",
      childvalue3: ""
    };
  },
  props: {
    type: [String, Number],
    default: ""
  },
  methods: {
    handleParent(e) {
      this.childvalue3 = e.target.value;
    },
    parentFn(e) {
      this.submitMesssgae = e;
    }
  },
  components: {
    AInput,
    ABout
  }
};
</script>
<style lang="less">
</style>
