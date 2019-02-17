import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Task from '../components/Task.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/task', name: 'task', component: Task},
];

export default new VueRouter({
  routes,
  base: '/',
  linkActiveClass: 'active',
  mode: 'history'
})