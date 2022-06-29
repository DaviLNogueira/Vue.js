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
        {
          url : 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg',
          descricao : "Cachorro"
        },
        {
          url : 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg',
          descricao : "Cachorro Grande"
        }
      ]
    }
  }
}
</script>

<style>

</style>
