

<template>
  <div class="corpo">
    <h1 class = "centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="Filtre por pasrte do título" v-on:input="filtro = $event.target.value">

    <!--v-on será responsável por excutar o input-->
  <ul class="lista-foto">
    <!--v-for realiza a um loop da variavell no script-->
    <li class="lista-foto-item" v-for="foto of fotosComFiltro ">
      <meu-painel :titulo ="foto.titulo">
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" ></imagem-responsiva>
      </meu-painel>

    </li>
  </ul>
  </div>


</template>

<script>
import Painel from "./components/shared/painel/painel" ; // importar o arquivo que deseja
import imagemResponsiva from "./components/shared/imagem-responsiva/imagemResponsiva";

export default {
  components: { // aplelido do componente importado

    'meu-painel': Painel,
    'imagem-responsiva' : imagemResponsiva,
  },

  data(){
    return{
      titulo : "Alura Fotos",
      fotos:[],
      filtro : ''
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

  //Lifecycle Hooks
  created() { // usados na inicialização
    let promisse = this.$http.get('http://localhost:3000/v1/fotos')// usado para capturar a requisão
      .then(res => res.json())
      .then(fotos => this.fotos =fotos, error => console.log(error))
  }
}
</script>

<style>

.corpo {
  font-family: Heltica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

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
