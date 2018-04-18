<template>
  <div>
    <h1>Cluster</h1>
    <p>Current msg: {{ gettersLang }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cluster',
  data: function () {
    return {}
  },
  computed: { ...mapGetters(['gettersLang']) }
}
</script>

<style>

</style>
