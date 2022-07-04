<template>
  <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>

<script>

export default {
  props : {
    tipo: {
      required : true,
      type:String
    },
    rotulo :{
      required: true,
      type: String
    },
    confirmacao: Boolean,
    estilo: String,
  },
  methods :{
    disparaAcao(){
      if(this.confirmacao){
        if(confirm('Deseja confirmar a ação?')){
          this.$emit('botaoAtivado') ;// dispara qualquer nome de acao que denominei
        }
        return;
      }
      this.$emit('botaoAtivado');

    }
  },

  computed: {

    estiloDoBotao() {

      // se o valor é padrão ou não passou nada para estilo
      if(this.estilo == 'padrao' ) return 'botao botao-padrao';

      if(this.estilo == 'perigo') return 'botao botao-perigo';
    }
  }
}
</script>

<style scoped lang="sass"> //declarar que utlizara o scass

  @import './Botao.scss'

</style>
