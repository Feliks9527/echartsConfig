import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/line',
      children: [
        {
          path: '/line',
          name: 'line',
          component: () => import('@/components/line/index.vue'),
        },
        {
          path: '/bar',
          name: 'bar',
          component: () => import('@/components/bar/index.vue'),
        },
        {
          path: '/pie',
          name: 'pie',
          component: () => import('@/components/pie/index.vue'),
        }
      ]
    }
  ],
})

export default router
