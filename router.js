import { createRouter, createWebHistory } from 'vue-router';
import HomeLV from './views/LV/HomeLV.vue';
import HomeEN from './views/EN/HomeEN.vue';

const routes = [
  { path: '/lv', component: HomeLV },
  { path: '/en', component: HomeEN },
  { path: '/', redirect: '/lv' } // Ja atver sakni, pārvirza uz LV
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;