import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Mytasks from '../views/Mytasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Mytasks',
    name: 'Mytasks',   
    component: Mytasks
  }
]

const router = new VueRouter({
  routes
})

export default router
