<template>
  <section>
    <form>
      <input name="busca" id="busca" type="text" v-model="busca" />
      <input
        type="submit"
        id="lupa"
        value="Buscar"
        @click.prevent="buscarProdutos"
      />
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
   buscarProdutos(){
     alert('Busca os Produtos')
   }
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
</style>