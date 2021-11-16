<template>
<div class="id"> 
   <h1>Venda</h1>
   <button >Cumprimento Patric</button>
</div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      produtos: null
    };
  },
  methods: {
      getProdutos() {

        axios.get("http://localhost:3000/produto").then(response=>{
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