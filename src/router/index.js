import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddItem from '../components/AddItem.vue'
import ListOfEmpty from '../components/ListEmpty'
import ListOfItem from '../components/ListOfItem.vue'
import ProductDetails from '../components/ProductDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/products',
        name: 'ListOfItem',
        component: ListOfItem
      },
      {
        path: '/add-item',
        name: 'AddItem',
        component: AddItem
      },
      {
        path: '/outstock-list',
        name: 'ListOfEmpty',
        component: ListOfEmpty
      },
      {
        path: '/details',
        name: 'ProductDetails',
        component: ProductDetails
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
