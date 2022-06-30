<template>

        <div class="painel">
          <h2 class="painel-titulo" @dblclick="visivel= !visivel">{{ titulo }}</h2>
          <!--
          dbcliclk == doblo click
          @ => v-on
          -->
          <transition name = "painel-fade">
            <div v-show="visivel" >
              <slot class="painel-conteudo" ></slot>
            </div>
          </transition>

        </div>


</template>

<script>
export default {
  props : ['titulo'],

  data(){

    return{
      visivel: true,
    }
  }
}
</script>

<style scoped> /*aplicações de outros componetes não interferem um no outro se aplicamos o atributo scoped*/


/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}


.painel-conteudo {
  overflow: hidden;
}

.painel *{
  box-shadow: 5px 5px 5px;
}

.painel-fade-enter, .painel-fade-leave-active{ /*São classes que automaticamente são criadas pelo transition tag */
  opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active{
  transition: opacity .3s; /*Tempo da opacidade*/
}



</style>

