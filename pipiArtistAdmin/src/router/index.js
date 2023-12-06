import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import HomeView from '../views/HomeView.vue'

export const constantRoutes = [
  {
    path:'/401',
    component:()=>import('@/views/error/401.vue')
  },
  {
    path:'/404',
    component:()=>import('@/views/error/404.vue')
  },
  {
    path:'/login',
    component:()=>import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component:HomeView,
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
        children:[
          {
            path:'test',
            name:'Test',
            component:HomeView,
            meta: { title: 'Test', icon: 'dashboard', affix: true }
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
