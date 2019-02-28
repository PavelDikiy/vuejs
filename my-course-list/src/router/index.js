import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/page/Home.vue';
import Courses from '../components/page/Courses.vue';
import Users from '../components/page/Users.vue';

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
