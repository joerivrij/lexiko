import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.http = Vue.prototype.$apiClient = axios;
Vue.prototype.$sokratesUrl = store.state.SokratesUrl
Vue.prototype.$herodotosUrl = store.state.HerodotosUrl
Vue.prototype.$alexandrosUrl = store.state.AlexandrosUrl

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$sokratesUrl = "http://minikube-odysseia.test/sokrates/v1"
  Vue.prototype.$herodotosUrl = "http://minikube-odysseia.test/herodotos/v1"
  Vue.prototype.$alexandrosUrl = "http://minikube-odysseia.test/alexandros/v1"
}

console.log(`sokrates proxy found at: ${Vue.prototype.$sokratesUrl}`)
console.log(`herodotos proxy found at: ${Vue.prototype.$herodotosUrl}`)
console.log(`alexandros proxy found at: ${Vue.prototype.$alexandrosUrl}`)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>'
}).$mount('#app');
