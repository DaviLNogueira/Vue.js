<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<script src="https://unpkg.com/vee-validate"></script>

<template >

  <div >
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{foto.titulo}}</h2>

    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <form @submit.prevent ="grava()"> <!--prevent cancelada o método padrão-->
      <div class="controle">
        <label for="titulo" >TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model="foto.titulo" required>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off"  v-model.lazy="foto.url" required><!--Posterga a requisição até sair do objeto -->
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
      id : this.$route.params.id
    }
  },

  methods:{
    grava(){

      this.service.cadastra(this.foto)
        .then(()=> {
          if(this.id)
              this.$router.push({name: 'home'});
          this.foto=  new Foto()}, err => console.log(err))
    },
  },
  created() {
    this.service = new FotoService(this.$resource)
    if(this.id){

      this.service.busca(this.id)
        .then(isso => this.foto = isso);
    }
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
