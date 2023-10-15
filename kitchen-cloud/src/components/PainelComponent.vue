<template>
    <div class="container">
      <div class="component-title">
        <h1>PAINEL</h1>
      </div>
      <div class="search-input">
        <button class="title-estoque" @click="setActiveTab('estoque')">Estoque</button>
        <button class="title-notas" @click="setActiveTab('notas')">Notas</button>
        <button class="title-fornecedor" @click="setActiveTab('fornecedor')">Fornecedor</button>
      </div>
      <table-estoque v-if="activeTab === 'estoque'"></table-estoque>
      <table-notas v-if="activeTab === 'notas'"></table-notas>
      <table-fornecedor v-if="activeTab === 'fornecedor'"></table-fornecedor>
    </div>
  </template>
  
  <script>
  import estoque from './EstoqueComponent.vue';
  import notas from './NotasComponent.vue';
  import fornecedor from './FornecedorComponent.vue';

  export default {
    components: {
        'table-estoque': estoque,
        'table-notas': notas,
        'table-fornecedor': fornecedor,
    },
    data() {
      return {
        activeTab: 'estoque', // Defina a aba inicial ativa
      };
    },
    methods: {
      setActiveTab(tabName) {
        this.activeTab = tabName;
      },
    },
  };
  </script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Faz com que o componente ocupe todo o espaço disponível na vertical */
  justify-content: stretch; /* Faz com que o componente ocupe todo o espaço disponível na horizontal */
  height: 100vh; /* Define a altura para ocupar 100% da altura da tela */
  width: 100%; /* Define a largura para ocupar 100% da largura disponível */
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 16rem;
}

.component-title {
  color: #ff0000a4;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-right: 950px;
  font-size: 20px;
  margin-top: -20px;
}

.title-estoque {
  background-color: white;
  border: 1px solid #ff0000;
  border-radius: 18px;
  padding: 6px;
  color: #ff0000a4;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  font-size: 22px;
  margin-right: 10px;
}

.title-notas {
  background-color: white;
  border: 1px solid #ff0000;
  border-radius: 18px;
  padding: 6px;
  color: #ff0000a4;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-right: 10px;
  font-size: 22px;
}

.title-fornecedor {
  background-color: white;
  border: 1px solid #ff0000;
  border-radius: 18px;
  padding: 6px;
  color: #ff0000a4;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-right: 50rem;
  font-size: 22px;
}
</style>
  