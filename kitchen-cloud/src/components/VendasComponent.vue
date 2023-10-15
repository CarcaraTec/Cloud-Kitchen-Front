<template>
    <div class="container">
        <div class="search-input">
          <input type="date" v-model="selectedDate" @change="filterDataByDate" />
        </div>
        <table class="table-data">
            <thead>
            <tr>
                <th>Cód</th>
                <th>Prato</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>Valor Total</th>
                <th>Data/hora</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredVendaByDate" :key="item.codItemVenda">
                    <td>{{ item.codItemVenda }}</td>
                    <td>{{ item.nomePrato }}</td>
                    <td>{{ item.quantidade }}x</td>
                    <td>R${{ item.valorItem }}</td>
                    <td>R${{ item.valorTotal }}</td>
                    <td>{{ formatDateTime(item.dataVenda) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'vendas',
  data() {
    return {
      vendasData: [],
      searchTerm: '',
      selectedDate: null
    };
  },
  computed: {
    filteredVendaByDate() {
    if (!this.selectedDate) {
      return this.vendasData;
    }
    
    const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
    return this.vendasData.filter((item) => {
      const itemDate = item.dataVenda.split('T')[0];
      return itemDate === selectedDate;
    });
  },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8081/vendas')
        .then(response => {
          this.vendasData = response.data;
        })
        .catch(error => {
          console.error('Erro ao realizar busca nas vendas: ', error);
        });
    },
    formatDateTime(value) {
      if (!value) return '';

      const date = new Date(value);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };

      return date.toLocaleString('pt-BR', options);
    },
    filterDataByDate() {
  if (!this.selectedDate) {
    // Se a data não estiver selecionada, exiba todos os dados
    this.filteredVenda = this.vendasData;
  } else {
    // Se uma data estiver selecionada, filtre os dados com base nessa data
    const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
    this.filteredVenda = this.vendasData.filter((item) => {
      const itemDate = item.dataVenda.split('T')[0];
      return itemDate === selectedDate;
    });
  }
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

.search-input {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-top: 50px; 
  margin-right: -30px;
}
.input-search {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Times New Roman', sans-serif;
  width: 25%; /* Define a largura para ocupar 100% do espaço disponível */
}
.search-button {
  margin-left: 5px;
  border-radius: 4px;
  border: 1px solid #00000052;
  background-color: #ff000065;
  color: white;
}

input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Times New Roman', sans-serif;
}

table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      font-family: 'Times New Roman', sans-serif;
      margin-top: 10px;
      margin-left: 30px;
    }

    table th {
      background-color: #ffc6c6;
      border: 1px solid #dddddd;
      padding: 8px;
      color: #710000;
    }

    table td {
      border: 1px solid #dddddd;
      padding: 8px;
      color: #710000;
    }

    table thead:first-child {
      background-color: #ffb1b183; /* Fundo vermelho claro */
    }
</style>