<template>
  <div>
    <h1>{{titulo}}</h1>

  <ul>
    <!--v-for realiza a um loop da variavell no script-->
    <li v-for="foto of fotos"><img :src="foto.url" :alt="foto.descricao"></li>

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

</style>
