<template>
    <div class="container">
      <div class="component-title">
        <h1>PESSOAL</h1>
      </div>
      <div>
        <table-funcionario @redirecionar-para-detalhes="redirecionarParaDetalhes"></table-funcionario>
      </div>
  
    </div>
</template>

<script>
import funcionario from './FuncionariosTableComponent.vue';
export default {
  name: 'gestao',
  components: {
    'table-funcionario': funcionario,
  },
  methods: {
    redirecionarParaDetalhes(id) {
      this.$router.push({ name: 'funcionario', params: { id: id } });
    },
  },
  data() {
    return {
      funcionarios: [],
    };
  },
  fetchData() {
    axios.get('http://localhost:8081/funcionarios')
    .then(response => {
      this.funcinoarios = response.data;
      console.log(this.funcinoarios)
    })
    .catch(error => {
      console.error('Erro ao realizar busca: ', error);
    });
  },
};
</script>