<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ gettersLang }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data: function () {
    return {}
  },
  computed: { ...mapGetters(['gettersLang']) }
}
</script>

<style>

</style>
