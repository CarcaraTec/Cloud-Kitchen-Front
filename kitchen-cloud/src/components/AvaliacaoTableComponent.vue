<template>
    <table class="table-data">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nota atendimento</th>
            <th>Comentário</th>
            <th>Data da avaliação</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredFuncionario" :key="item.cod">
                <td>{{ item.id }}</td>
                <td>{{ item.nome }}</td>
                <td>{{ item.funcao }}</td>
                <td>{{ item.diaFolga }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
export default {
name: 'avaliacao',
data() {
  return {
    funcionarioData: [],
    searchTerm: '',
  };
},
computed: {
  filteredFuncionario() {
    const termo = this.searchTerm.toLowerCase();
    return this.funcionarioData.filter(item => item.nome.toLowerCase().includes(termo));
  }
},

mounted() {
  this.fetchData();
},
methods: {
  fetchData() {
    axios.get('http://localhost:8081/funcionarios')
    .then(response => {
      this.funcionarioData = response.data;
    })
    .catch(error => {
      console.error('Erro ao realizar busca dos funcionários: ', error);
    });
  },
}

}
</script>