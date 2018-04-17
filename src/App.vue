<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <router-link to='/Dashboard'>Dashboard</router-link>
    <router-link to='/Cluster'>Cluster</router-link>
    <router-link to='/Tenant'>Tenant</router-link>
    <router-link to='/NotExisted'>Not found test</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
