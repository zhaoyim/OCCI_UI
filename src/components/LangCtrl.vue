<template>
  <div>
    <button @click="changeToCN">中文</button>
    <button @click="changeToEN">English</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'LangCtrl',
  data () {
    return {}
  },
  methods: {
    ...mapActions(['changeLang']),
    changeToCN: function () {
      this.changeLang({lang: 'cn'})
    },
    changeToEN: function () {
      this.changeLang({lang: 'en'})
    }
  }
}
</script>
