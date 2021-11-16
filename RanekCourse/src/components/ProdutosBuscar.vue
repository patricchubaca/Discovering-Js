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
      {{url}}
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
  computed:{
    url(){
      let queryString = "";
      for(let key in this.$route.query){
        queryString += `&${key}=${this.$route.query[key]}`;
      }

      console.log(queryString);

       return this.$route.query;
    }
  },
  methods: {
   buscarProdutos(){
     this.$router.push({query:{q:this.busca}})
   }
  },
};
</script>

<style scoped>
</style>