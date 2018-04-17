import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Cluster from '@/components/Cluster'
import Tenant from '@/components/Tenant'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/cluster',
      name: 'Cluster',
      component: Cluster
    },
    {
      path: '/tenant',
      name: 'Tenant',
      component: Tenant
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
