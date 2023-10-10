<template>
    <div class="card">
      <p>Permanência média</p>
      <p class="dadosCard">{{ permanencia }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['permanencia']
  }
  </script>