<template>

  <nav>
    <ul>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'">{{rota.titulo}}</router-link> <!--Faz com que se estiver na mesma página não recorrega -->
      </li>

    </ul>
  </nav>

</template>

<script>


export default {
  props : {
    rotas:{
      type:Array, // definido a tipagem da requisição
      required: true
    }
  }
}
</script>

<style scoped>

</style>
