import Vue from 'vue'
import VueRouter from 'vue-router'
import Clouds from '../components/Clouds.vue'
import Water from '../components/Water.vue'
import Send from '../components/Sand.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/clouds', name: 'clouds', component: Clouds},
  {path: '/water', name: 'water', component: Water},
  {path: '/send', name: 'send', component: Send},
];

export default new VueRouter({
  routes,
  base: '/',
  linkActiveClass: 'active',
  mode: 'history'
})