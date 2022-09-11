// 引入创建路由管理器 引入创建路由模式 history模式
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue" // 使用别名@
// 引入路由各页面配置
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/error/Error.vue')
  },
  {
    path: '/performance',
    name: 'performance',
    component: () => import('@/views/performance/Performance.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/User.vue')
  }
]
// 创建路由管理器 模式和路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router