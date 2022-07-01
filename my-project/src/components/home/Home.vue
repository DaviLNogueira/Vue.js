

<template>
  <div >
    <h1 class = "centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }} </p>
    <input type="search" class="filtro" placeholder="Filtre por título" v-on:input="filtro = $event.target.value">

    <!--v-on será responsável por excutar o input-->
    <ul class="lista-foto">
      <!--v-for realiza a um loop da variavell no script-->
      <li class="lista-foto-item" v-for="foto of fotosComFiltro ">
        <meu-painel :titulo ="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate = "1.2" :url="foto.url" :titulo="foto.titulo" ></imagem-responsiva>

          <router-link :to="{name : 'altera', params: {id: foto._id}}">
            <meu-botao rotulo="ALTERAR" tipo="button" estilo="padrao"></meu-botao>
          </router-link>

          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado = "remove(foto)"
            :confirmacao = "true" estilo="perigo" >

          </meu-botao>
        </meu-painel>

      </li>
    </ul>
  </div>


</template>

<script>

import Painel from "../shared/painel/painel" ; // importar o arquivo que deseja
import imagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva";
import Botao from "../botao/Botao";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: { // aplelido do componente importado

    'meu-painel': Painel,
    'imagem-responsiva' : imagemResponsiva,
    'meu-botao' : Botao
  },

  data(){
    return{
      titulo : "Alura Fotos",
      fotos:[],
      filtro : '' ,
      mensagem : ''
    }
  },

  computed :{
    fotosComFiltro(){ // método que pode acessar como uma propriedade
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(),'i'); // Cria uma expressão regular, trim() retira espaços e 'i' = quanto mausculas e minusculas
        return  this.fotos.filter(foto => exp.test(foto.titulo));
        //filtrar

      }
      else{
        return this.fotos
      }
    }
  },

  methods :{
    remove(foto) {
      this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          },
          err => {
            this.mensagem = err.message;
          }
        )
    }

},

  //Lifecycle Hooks
  created() { // usados na inicialização

    this.service = new FotoService(this.$resource);
    this.service
      .lista()
      .then(fotos => this.fotos =fotos, err => this.mensagem = err.message
      );

  }
}
</script>

<style>

.centralizado{
  text-align: center;
}

.lista-foto{
  list-style: none;
}

.lista-foto .lista-foto-item{
  display: inline-block;
}


.filtro{
  display: block;
  width: 100%;
}
</style>
