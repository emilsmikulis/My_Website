import { createRouter, createWebHistory } from 'vue-router'

// 1. Importē savas lapas (pārliecinies, ka ceļi uz failiem ir pareizi)
import HomeView from '../views/LV/HomeView.vue';
import AboutView from '../views/LV/AboutView.vue';
import BlogView from '../views/LV/BlogView.vue';
import ShopView from '../views/LV/ShopView.vue';
import HomeLV from '../views/LV/HomeView.vue';
import HomeEN from '../views/LV/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 2. Pievieno lapas pie routes
  routes: [
   { path: '/lv', component: HomeLV },
    { path: '/en', component: HomeEN },
   // { path: '/', redirect: '/lv' }, // Noklusējuma lapa
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog', component: BlogView },
    { path: '/shop', component: ShopView }
  ]
})

export default router;