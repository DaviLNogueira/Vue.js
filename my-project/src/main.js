import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; //imposrtar do pacote baixado
//artefatos especializados na realização de requisições assíncronas ao mesmo tempo em que se integra com o ecossistema do Vue.
Vue.use(VueResource); //usar o pacote
new Vue({
  el: '#app',
  render: h => h(App)
})
