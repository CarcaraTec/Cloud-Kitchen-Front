import { createRouter, createWebHistory } from 'vue-router'
import EstoqueComponent from '../components/EstoqueComponent.vue'
import DashComponent from '../components/DashComponent.vue'
import VendasComponent from '../components/VendasComponent.vue'
import PainelComponent from '../components/PainelComponent.vue'
import OperacoesComponent from '../components/OperacoesComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'painel',
      component: PainelComponent
    },
    {
      path: '/painel',
      name: 'painel',
      component: PainelComponent
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: EstoqueComponent
    },
    {
      path: '/dash',
      name: 'dash',
      component: DashComponent
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: VendasComponent
    },
    {
      path: '/operacoes',
      name: 'operacoes',
      component: OperacoesComponent
    }
  ]
})

export default router
