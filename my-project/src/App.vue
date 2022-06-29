

<template>
  <div class="corpo">
    <h1 class = "centralizado">{{titulo}}</h1>

  <ul class="lista-foto">
    <!--v-for realiza a um loop da variavell no script-->
    <li v-for="foto of fotos" class="lista-foto-item">
      <meu-painel>
        <img class="imagem-responsiva" :src="foto.url" :alt="foto.descricao">

      </meu-painel>
    </li>

  </ul>
  </div>


</template>

<script>
export default {
  data(){
    return{
      titulo : "Alura Fotos",
      fotos:[

      ]
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

.imagem-responsiva{
  width: 100%;
}

/* estilo do painel */


</style>
