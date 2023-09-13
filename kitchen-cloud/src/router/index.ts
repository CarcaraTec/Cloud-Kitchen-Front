import { createRouter, createWebHistory } from 'vue-router'
import EstoqueComponent from '../components/EstoqueComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/estoque',
      name: 'estoque',
      component: EstoqueComponent
    }
  ]
})

export default router
