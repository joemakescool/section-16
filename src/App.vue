<template>
  <div id="app">
    <h1>Routing in Vue.js</h1>
    <hr>
    <router-view name="header-top"></router-view>
    <transition>
      <router-view></router-view>
    </transition>
    <router-view name="header-bottom"></router-view>

  </div>
</template>

<script>

  //import Header from "@/components/Header";

export default {
  name: 'app',
  components: {
    //'app-header': Header
  }
}
//     <router-view foo="123"></router-view>

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
