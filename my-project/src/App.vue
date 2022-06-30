

<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link> <!--Faz com que se estiver na mesma página não recorrega -->
        </li>

      </ul>
    </nav>
    <transition name="pagina">
      <router-view> </router-view>
    </transition>

  </div>


</template>

<script>
import {routes} from "./routes";

export default {
  data() {

    return {

      routes
    }

  }

}
</script>

<style>

.corpo {
  font-family: Heltica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active{ /*São classes que automaticamente são criadas pelo transition tag */
  opacity: 0;
}

.pagina-enter-active, .painel-fade-leave-active{
  transition: opacity .3s; /*Tempo da opacidade*/
}


</style>
