/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home.vue'
import Product from '@/components/Products/Product'
import NewProduct from '@/components/Products/NewProduct'
import ProductList from '@/components/Products/ProductList'
import Checkout from '@/components/User/Checkout'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:id',
      props: true,
      name: 'Product',
      component: Product
    },
    {
      path: '/list',
      name: 'List',
      component: ProductList,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'new',
      component: NewProduct,
      beforeEnter: AuthGuard
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
  mode: 'history'
})
