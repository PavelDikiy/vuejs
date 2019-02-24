import Vue from 'vue'
import App from './App.vue'
import store from './store/'


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
/*new Vue({
 el: '#app',
 template: '<App/>',
 store,
 components: {App}
 })*/
