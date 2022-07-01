<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent ="grava()"> <!--prevent cancelada o método padrão-->
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off"  v-model.lazy="foto.url"><!--Posterga a requisição até sair do objeto -->
        <imagem-responsiva v-show= "foto.url" :url="foto.url" :titulo ="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao" ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" estilo = "padrao"/>
        <router-link :to="{name:'home'}"><meu-botao rotulo="VOLTAR" tipo="button" estilo = "padrao"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva";
import Botao from "../botao/Botao";
import Foto from "../../domain/foto/foto.js";
import FotoService from "../../domain/foto/FotoService";


export default {

  components: {

    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data (){
    return {
      foto : new Foto(),
    }
  },

  methods:{
    created() {
      this.service = new FotoService(this.$resource)
    }
    ,
    grava(){
      this.created()
      this.service.cadastra(this.foto)
        .then(()=> this.foto = new Foto(), err => console.log(err))
    },



  }
}

</script>
<style scoped>

.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;

}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input, .controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px
}

.centralizado {
  text-align: center;
}

</style>
