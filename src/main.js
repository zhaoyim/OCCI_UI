// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import LangCtrl from './components/LangCtrl'
import router from './router'
import store from './store/index'
import i18n from './lang/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component('lang-ctrl', LangCtrl)

/* eslint-disable no-new */
export const occiapp = new Vue({
  el: '#app',
  router,
  store, // Mount vuex store
  i18n, // Mount vue-i18n to support international
  components: { App },
  template: '<App/>'
})
