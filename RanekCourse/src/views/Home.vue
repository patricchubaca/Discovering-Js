<template>
<section>
  <h1>Teste</h1>
   <ProdutosBuscar />
   <ProdutosLista />
</section> 
 
</template>

<script>

import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "home",
  components : {
    ProdutosBuscar,
    ProdutosLista
  }

};
</script>
