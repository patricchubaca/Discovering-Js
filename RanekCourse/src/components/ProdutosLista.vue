<template>
<div class="id"> 
   <h1>Venda</h1>
   <button v-on:click="greet('teste')" >Cumprimento Patric</button>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      name: 'Patric Enderson'
    };
  },
  methods : {
     greet: function (event) {
      // `this` dentro de métodos aponta para a instância Vue
      alert('Olá ' + this.name + '!')
   }
  }
}
</script>

<style scoped>

</style>>

</style>