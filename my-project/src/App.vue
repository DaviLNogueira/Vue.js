

<template>
  <div class="corpo">
    <meu-menu :rotas = "routes">

    </meu-menu>
    <transition name="pagina">
      <router-view> </router-view>
    </transition>

  </div>


</template>

<script>
import {routes} from "./routes";
import Menu from "./components/shared/menu/Menu";

export default {

  components : {
    'meu-menu' : Menu
  },
  data() {

    return {

      routes : routes.filter((route => route.menu))
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
