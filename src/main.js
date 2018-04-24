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
import axios from 'axios'
import VueAxios from 'vue-axios'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// import element UI
Vue.use(ElementUI)
// import vue-i18n
Vue.component('lang-ctrl', LangCtrl)
// import axios
Vue.use(VueAxios, axios)
// import font awesome
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
export const occiapp = new Vue({
  el: '#app',
  router,
  store, // Mount vuex store
  i18n, // Mount vue-i18n to support international
  components: { App },
  template: '<App/>'
})
