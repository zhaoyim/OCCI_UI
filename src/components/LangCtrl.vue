<template>
  <div class="ci-buttongroup">
    <el-radio-group v-model="lang" @change="changeTo" size="small">
      <el-radio-button :label="lang_cn"></el-radio-button>
      <el-radio-button :label="lang_en"></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LangCtrl',
  data () {
    return {
      lang_cn: this.$t('cn'),
      lang_en: this.$t('en'),
      lang: ''
    }
  },
  computed: {
    ...mapGetters(['gettersLang'])
  },
  mounted () {
    this.lang = this.$t(this.gettersLang)
  },
  methods: {
    ...mapActions(['changeLang']),
    changeTo: function () {
      if (this.lang === this.lang_cn) {
        this.changeLang({lang: 'cn'})
      } else if (this.lang === this.lang_en) {
        this.changeLang({lang: 'en'})
      } else { // reset to cn
        this.lang = this.lang_en
        this.changeLang({lang: 'cn'})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ci-buttongroup {
  margin: {
    top: 20px;
    bottom: 10px;
  }
}
</style>
