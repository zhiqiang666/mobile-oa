<template>
  <div>
    <h3>api</h3>
    <button @click="handleGetInfo">axios</button>
    <h3>{{res}}</h3>
  </div>
</template>
<script>
import {getInfo} from '@/api/user'
export default {
  name: "Axios",
  data(){
    return {
      res:''
    }
  },
  methods: {
    handleGetInfo() {
      getInfo().then((res)=>{
        console.log(res)
      })
      // getInfo().then(res=>{
        // console.log(res)
      // })
      // axios.get('/getinfo').then((res)=>{
      //   this.res = res.status;
      // }).catch((err)=>{
      //   console.log(err)
      // })
    }
  }
};
</script>
