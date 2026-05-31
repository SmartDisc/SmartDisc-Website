import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: () => import('../views/ProductsView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/faq', component: () => import('../views/FaqView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
    { path: '/privacy', component: () => import('../views/PrivacyView.vue') },
    { path: '/terms',   component: () => import('../views/TermsView.vue') },
    { path: '/imprint', component: () => import('../views/ImprintView.vue') },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
