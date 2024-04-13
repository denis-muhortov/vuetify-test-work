import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'


const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VITE_VUE_APP_API_URL),
  extendRoutes: setupLayouts,
  routes,
})

export default router
