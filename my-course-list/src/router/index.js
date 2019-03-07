import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../page/Home.vue';
import Courses from '../page/Courses.vue';
import Users from '../page/Users.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/courses', name: 'courses', component: Courses},
  {path: '/users', name: 'users', component: Users},
];

export default new VueRouter({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: 'active'
});
