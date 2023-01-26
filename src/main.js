import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import API from './share/api.js'

Vue.config.productionTip = false

Vue.prototype.$api = API

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
