<template>
  <div>
    <button @click="handleClick">push</button>
    <h2>{{appName}}|{{appWithVersion}}</h2>
    <h2>{{userName}}|{{firstletter}}</h2>
    <h2>{{appWithVersion}}</h2>
    <h2>{{myTelVersion}}</h2>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    appWithVersion() {
      return this.$store.getters.appWithVersion;
    },
    myTelVersion() {
      return this.$store.getters.myTelVersion;
    },
    ...mapGetters(["appWithVersion"]),
    ...mapGetters("user", ["firstletter"]),
    // userName(){
    //   return this.$store.state.user.userName
    // }
    // ...mapState({
    //   appName:state=>state.appName,
    //   userName:state=>state.user.userName
    // })
    ...mapState("user", {
      userName: state => state.userName
    })
  },
  methods: {
    handleClick() {
      this.$bus.$emit("bus-click", "I am tel");
    }
  }
};
</script>
