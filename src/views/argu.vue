<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "lili"
    }
  },
  beforeRouteEnter: (to, from, next) => {
    /**
     * 导航确认前被调用
     * 不可以访问this
     *  */
    // console.log(to.name)
    // console.log(from.name)
    next(vm=>{
      // console.log(vm)
    })
  },
  beforeRouteUpdate(to, from, next) {
    //组件被复用时调用
      // console.log(to.name);
      // console.log(from.name);
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("确定要走?");
    if (leave) next();
    else next(false);
  }
};
</script>
