import { createRouter, createWebHistory } from 'vue-router'

// 1. Importē savas lapas (pārliecinies, ka ceļi uz failiem ir pareizi)
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 2. Pievieno lapas pie routes
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog', component: BlogView },
    { path: '/shop', component: ShopView }
  ]
})

export default router