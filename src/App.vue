<template>
  <div id="app">
    <h1>Routing in Vue.js</h1>
    <app-header></app-header>
    <hr>
    <router-view foo="123"></router-view>

  </div>
</template>

<script>

  import Header from "@/components/Header";

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
