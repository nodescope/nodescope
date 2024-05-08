import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: '/terminal',
      name: 'Terminal',
      component: () => import('../views/TerminalView.vue')
    },
    {
      path: '/node-management',
      name: 'NodeManagement',
      component: () => import('../views/NodeManagementView.vue')
    },
    {
      path: '/connect-wallet',
      name: 'ConnectWallet',
      component: () => import('../views/ConnectWalletView.vue')
    }
  ]
})

export default router
