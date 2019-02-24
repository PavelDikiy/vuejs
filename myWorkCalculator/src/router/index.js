import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Calculator from '../components/Calculator.vue'
import Results from '../components/Results.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/calculator', name: 'calculator', component: Calculator},
  {path: '/results', name: 'results', component: Results},
  /*  {path: '/result',
   props: (route) => ({ resultObj: route.params.result }),
   name: 'results', component: Results},*/
];

export default new VueRouter({
  routes,
  base: '/',
  linkActiveClass: 'active',
  mode: 'history'
})