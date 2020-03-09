<template>
  <div>
    <h3>I am child Component</h3>
    <input @input="handleInput" :value="value" ref="inputValue"/>
    <button @click="handleClick">往上传</button>
  </div>
</template>
<script>
export default {
  name: 'AInput',
  data(){
    return{
      mes:'I am AInput'
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit('input', value);
    },
    handleClick(e){
      const value = this.$refs.inputValue.value;
      this.$emit('childFn',value)
    }
  }
};
</script>
<style lang="less">
</style>
