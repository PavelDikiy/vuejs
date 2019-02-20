import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.filter('spaceNumber', function (numb) {
  let stringNum = (numb + "").split('');
  if (stringNum.length > 3 && typeof numb == 'number') {
    let result = '';
    for (let i = stringNum.length - 1, j = 0; i >= 0, j < stringNum.length; i--, j++) {
      if ((i % 3) === 0 && i !== 0) {
        result += stringNum[j] + " ";
      } else {
        result += "" + stringNum[j];
      }
    }
    return result;
  }
  return numb;
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
