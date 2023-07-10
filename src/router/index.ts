import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/MainComponent.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../components/GameNewsComponent.vue')
    },
    {
      path: '/new-games',
      name: 'new games',
      component: () => import('../components/NewGameComponent.vue')
    },
    {
      path: '/popular-games',
      name: 'popular games',
      component: () => import('../components/PopularGamesComponent.vue')
    }
  ]
})

export default router
