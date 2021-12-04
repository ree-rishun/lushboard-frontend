import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/dashboard/Home'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import ProfileEdit from '../views/dashboard/Edit'
import TeamList from '../views/teams/List'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/edit',
    name: 'ProfileEdit',
    component: ProfileEdit,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
