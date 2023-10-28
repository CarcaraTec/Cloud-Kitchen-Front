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
      
    };
  },
};
</script>