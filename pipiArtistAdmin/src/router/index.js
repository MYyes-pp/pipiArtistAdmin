import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect:'/dashboard',
      children:[
        {
          path:'/dashboard',
          name:'Dashboard',
          component:HomeView,
          meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ]
    },
    
  ]
})

export default router
