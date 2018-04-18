<template>
  <div>
    <h1>Tenant</h1>
    <el-button @click="visible = true">Click</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try element-ui</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Tenant',
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style>

</style>
