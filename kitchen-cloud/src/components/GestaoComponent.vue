<template>
    <div class="container">
      <div class="component-title">
        <h1>PESSOAL</h1>
      </div>
      <div>
        <table-funcionario></table-funcionario>
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