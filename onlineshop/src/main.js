/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import store from './store'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import * as fireBase from 'firebase/app'

Vue.use(Vuetify)
Vue.component('app-buy-dialog',BuyDialogComponent)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyCq4VReAGrNdnvCijdrOPZThM28tcSGT44',
      authDomain: 'onlineshopvue.firebaseapp.com',
      databaseURL: 'https://onlineshopvue.firebaseio.com',
      projectId: 'onlineshopvue',
      storageBucket: 'onlineshopvue.appspot.com',
      messagingSenderId: '957838322737'
    }

    fireBase.initializeApp(config)

    fireBase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    }),
      this.$store.dispatch('fetchProducts');
  }
})

