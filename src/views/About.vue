<template>
  <div class="about">
    <h1>我是子页面</h1>
    <div></div>
    <h3>{{paramValue}}</h3>
    <h3>{{paramValue2}}</h3>
    <h2>{{paramValue3}}</h2>
  </div>
</template>
<script>
export default {
  name:'about',
  props: {
    food: {
      type:String,
      default:'apple'
    }
  },
  props:{
    paramValue:String,
    paramValue2:String,
    paramValue3:String
  }
};
</script>
