<template>
<div class="id"> 
   <h1>Venda</h1>
   <button >Cumprimento Patric</button>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      produtos: null
    };
  },
  methods: {
      getProdutos() {
      fetch("http://localhost:3000/produto")
        .then(response => response.json())
        .then(response => {
          this.produtos = response;

          console.log(this.produtos)
        });
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>

</style>>

</style>