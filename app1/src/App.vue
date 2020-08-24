<template>
  <div id="app">
<!--    <a href="/">home</a>-->
<!--    <a href="/about">about</a>-->
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/helloword">helloword</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
