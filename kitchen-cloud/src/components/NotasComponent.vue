<template>
  <div>
    <div class="card-container">
      <CardReceitaTotal :receitaTotal="cardData.receitaTotal" />
      <CardTotalNotas :mediaVendas="cardData.mediaVendas" />
      <CardPermanencia :permanencia="cardData.permanencia" />
      <CardPrecoMedioNotas :precoMedioNota="cardData.precoMedioNota" />
    </div>
    <div class="search-input">
      <input type="date" v-model="selectedDate" @change="filterDataByDate" />
    </div>
    <table class="table-data">
        <thead>
        <tr>
            <th>NF</th>
            <th>Qtd Itens</th>
            <th>Preço Nota</th>
            <th>Abertura</th>
            <th>Fechamento</th>
            <th>Atendente</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredNotas" :key="item.cod">
                <td>{{ item.nf }}</td>
                <td>{{ item.qtdItens }}x</td>
                <td>R${{ item.preco }}</td>
                <td>{{ formatDateTime(item.abertura) }}</td>
                <td>{{ formatDateTime(item.fechamento) }}</td>
                <td>{{ item.atendente }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import CardReceitaTotal from './CardReceitaTotalComponent.vue';
import CardTotalNotas from './CardTotalNotasComponent.vue';
import CardPermanencia from './CardPermanenciaComponent.vue';
import CardPrecoMedioNotas from './CardPrecoMedioNotasComponent.vue';

export default {
name: 'notas',
components: {
  CardReceitaTotal,
  CardTotalNotas,
  CardPermanencia,
  CardPrecoMedioNotas
},
data() {
  return {
    notasData: [],
    searchTerm: '',
    selectedDate: null,
    cardData: {
      receitaTotal: null,
      mediaVendas: null,
      permanencia: null,
      precoMedioNota: null,
    },
  };
},
computed: {
  filteredNotas() {
    const termo = this.searchTerm.toLowerCase();
    const notasFiltradasPorData = this.filterDataByDate();

    if (termo) {
      return notasFiltradasPorData.filter((item) => item.abertura.toLowerCase().includes(termo));
    } else {
      return notasFiltradasPorData;
    }
  },
},

mounted() {
  this.fetchData();
  this.fetchCardData();
},
methods: {
  fetchData() {
    axios.get('http://localhost:8080/view-comanda')
    .then(response => {
      this.notasData = response.data;
    })
    .catch(error => {
      console.error('Erro ao realizar busca: ', error);
    });
  },
  filterDataByDate() {
    if (!this.selectedDate) {
      // Se a data não estiver selecionada, exiba todos os dados
      return this.notasData;
    } else {
      // Se uma data estiver selecionada, filtre os dados com base nessa data
      const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0];
      return this.notasData.filter((item) => {
        const itemDate = item.abertura.split('T')[0]; // Supondo que a data está no formato ISO
        return itemDate === selectedDate;
      });
    }
  },
  formatDateTime(dateTime) {
    if (!dateTime) return '';

    const date = new Date(dateTime);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    return date.toLocaleString('pt-BR', options);
  },
  fetchCardData() {
      axios
        .get('http://localhost:3000/cards')
        .then((response) => {
          this.cardData = response.data[0];
        })
        .catch((error) => {
          console.error('Erro ao buscar dados dos cards: ', error);
        });
    },
}

}
</script>

<style>
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

.card-container {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-left: 50px;
}

.card {
  width: 239px;
  height: 150px;
  padding: 5px;
  border: 1px solid #00000042;
  border-radius: 10px;
  font-family: 'Lilita One', sans-serif;
  background-color: #ff0000;
  color: #fff; /* Texto branco */
  text-align: left; /* Centralizar o texto horizontalmente */
  font-size: 25px;
}

.card p {
  margin: 0;
  padding: 5px;
}

.dadosCard {
  text-align: right;
  font-size: 40px;
}
</style>