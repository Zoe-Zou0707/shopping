import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Login from '../view/Login'
import Register from '../view/Register'
import Cart from '../view/Cart'
import Details from '../view/Details'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      // redirect: '/home'
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
      // component: (resolve) => require('../view/Home.vue')
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: () => import('../view/Register')
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ]
})
