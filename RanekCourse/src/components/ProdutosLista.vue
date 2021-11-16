<template>
<section>
  <div v-for="produto in produtos" :key="produto.id">
    <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
    <h2>{{produto.nome}}</h2>
    <p>{{produto.preco}}</p>
    <p>{{produto.descricao}}</p>
    
  </div>
</section>
</template>

<script>
import {api} from "@/services.js";

export default {
  data() {
    return {
      produtos: null
    };
  },
  methods: {
      getProdutos() {
        api.get("http://localhost:3000/produto").then(response=>{
         this.produtos  = response.data;
         console.log(response)
        })
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