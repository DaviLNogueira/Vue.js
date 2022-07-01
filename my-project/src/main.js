import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; //importar do pacote baixado
import VueRouter from "vue-router"; // gerenciamento de rotas
import  {routes} from "./routes";
import  '../src/components/directives/Transform';  // carregado

//artefatos especializados na realização de requisições assíncronas ao mesmo tempo em que se integra com o ecossistema do Vue.
Vue.use(VueResource); //usar o pacote
Vue.http.options.root = 'http://localhost:3000'
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history' //tirar o jogo da velha
}) // quando o estiver com o mesmo nome do componete da rota
// , apenas colocar uma vez.


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
