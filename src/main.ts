import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Zh from './assets/lang/zh'
import En from './assets/lang/en'
import VueI18n from 'vue-i18n'
import './assets/style/global.scss'
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
   'zh': Zh,
   'en': En
  }
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')