import { createRouter, createWebHistory } from 'vue-router'
import EstoqueComponent from '../components/EstoqueComponent.vue'
import PainelComponent from '../components/PainelComponent.vue'
import VendasComponent from '../components/VendasComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/estoque',
      name: 'estoque',
      component: EstoqueComponent
    },
    {
      path: '/painel',
      name: 'painel',
      component: PainelComponent
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: VendasComponent
    }
  ]
})

export default router
