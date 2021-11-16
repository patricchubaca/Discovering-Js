<template>
  <section>
    <form>
      <input name="busca" id="busca" type="text" v-model="busca" />
      <input
        type="submit"
        id="lupa"
        value="Buscar"
        @click.prevent="buscarProdutos(busca)"
      />
      {{busca}}
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      busca: ""
    };
  },
  methods: {
   buscarProdutos(){
     alert('Busca os Produtos' + this.busca)
   }
  },
};
</script>

<style scoped>
</style>