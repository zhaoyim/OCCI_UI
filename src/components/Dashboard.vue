<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ gettersMsg }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data: function () {
    return {}
  },
  computed: { ...mapGetters(['gettersMsg']) }
}
</script>

<style>

</style>
