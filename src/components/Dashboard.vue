<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ gettersUsername }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data: function () {
    return {}
  },
  computed: { ...mapGetters(['gettersUsername']) }
}
</script>

<style>

</style>
