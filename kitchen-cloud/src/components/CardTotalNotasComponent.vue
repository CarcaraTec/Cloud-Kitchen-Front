<template>
    <div class="card">
      <p>Total notas</p>
      <p class="dadosCard">{{ mediaVendas }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['mediaVendas']
  }
  </script>