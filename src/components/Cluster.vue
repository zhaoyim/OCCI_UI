<template>
  <div>
    <h1>Cluster</h1>
    <p>Current msg: {{ gettersMsg }}</p>
    <button @click="changeMsg">Click Me</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cluster',
  data: function () {
    return {}
  },
  computed: { ...mapGetters(['gettersMsg']) },
  methods: { ...mapActions(['changeMsg']) }
}
</script>

<style>

</style>
