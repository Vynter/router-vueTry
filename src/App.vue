<template>
  <div id="app">
    <!-- <Acceuil></Acceuil> -->
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";

export default {
  name: "App",
  components: {
    Head: HeaderTop,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
