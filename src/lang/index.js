import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn'
import en from './en'

Vue.use(VueI18n)

const locale = 'cn'

const messages = {
  cn,
  en
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
