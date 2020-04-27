<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide(){
    return {
      reload:this.reload
    }

  },
  components: {},
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods:{
     reload () {
      this.isRouterAlive= false
      this.$nextTick(function () {
        this.isRouterAlive= true
      })
     }

  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  min-width: 1366px;
}
</style>
