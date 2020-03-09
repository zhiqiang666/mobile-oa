<template>
  <div>
    <h1>{{mes}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mes: ""
    };
  },
  mounted() {
    this.$bus.$on("bus-click", mes => {
      this.mes = mes;
    });
  }
};
</script>
