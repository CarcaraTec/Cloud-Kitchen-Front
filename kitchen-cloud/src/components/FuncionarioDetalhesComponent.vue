<template>
 <div class="container">
  <div class="component-nome">
    <H1>{{ funcionario.nome }}</H1>
  </div>
  <div>
    <table-avaliacao></table-avaliacao>
  </div>
 </div>
</template>

<script>
import axios from 'axios';
import avaliacao from './AvaliacaoTableComponent.vue';

export default {
  name: 'funcionarioDetalhe',
  components: {
    'table-avaliacao': avaliacao,
  },
  data() {
    return {
      funcionario: {},
    };
  },
  created() {
    const funcionarioId = this.$route.params.id;
    this.fetchFuncionario(funcionarioId);
  },
  methods: {
    fetchFuncionario(id) {
      axios.get(`http://localhost:8081/funcionarios/${id}`)
        .then(response => {
          this.funcionario = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar informações do funcionário: ', error);
        });
    },
  },
};
</script>

<style>
.component-nome {
  width: 100%;
  color: #ff0000a4;
  font-family: 'Lilita One', sans-serif;
  text-align: left;
  margin-right: 950px;
  margin-left: 50px;
  font-size: 25px;
  margin-top: 20px;
}
</style>