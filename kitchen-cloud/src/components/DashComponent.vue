<template>
  <div class="container">
    <div class="component-title">
      <h1>DASHBOARD</h1>
    </div>

    <!-- <div class="card-container">
      <div class="card">
      </div>
      <div class="card">
      </div>
    </div> -->

    <!-- Renderize o gráfico automaticamente ao carregar o componente -->
    <ChartEstoqueComponent v-if="showChart" :estoqueData="estoqueData" />
    <ChartVendasComponent v-if="showChart" :vendasData="vendasData" />
  </div>
</template>

<script>
import ChartEstoqueComponent from './ChartEstoqueComponent.vue';
import ChartVendasComponent from './ChartVendasComponent.vue'

export default {
  name: 'painel',
  components: {
    ChartEstoqueComponent, ChartVendasComponent // Registre o componente
  },
  data() {
    return {
      showChart: true, // Defina como true para mostrar o gráfico automaticamente
      estoqueData: [],
      vendasData: [], // Seus dados de estoque
    };
  },
};
</script>

<style>
/* Estilos para os cards */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espaço entre os cards */
}

.card {
  width: 550px; /* Largura do card */
  height: 250px; /* Altura do card */
  border: 1px solid #ff0000;
  margin-top: 30px;
}
</style>
