<template>
  <div>
    <a-input v-model="childMessage"/>
    <p>子组件传来的值:{{childMessage}}</p>
    <a-input v-on:childFn="parentFn"/>
    <p>子提交的值:{{submitMesssgae}}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
export default {
  name:'store',
  data() {
    return {
      childMessage: '',
      submitMesssgae:''
    };
  },
  methods:{
      parentFn(e){
        console.log(e)
        this.submitMesssgae = e;
      }
  },
  components: {
    AInput
  }
};
</script>
<style lang="less">
</style>
