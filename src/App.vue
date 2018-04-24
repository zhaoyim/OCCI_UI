<template>
  <div id="app">
    <!--
    <lang-ctrl></lang-ctrl>
    <router-link to='/Dashboard'>Dashboard</router-link>
    <router-link to='/Cluster'>Cluster</router-link>
    <router-link to='/Tenant'>Tenant</router-link>
    <router-link to='/NotExisted'>Not found test</router-link>
    -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  min-width: 1500px;
  background: #F9FAFC;
}
</style>
