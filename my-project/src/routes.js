import Cadastro from "./components/cadastro/Cadastro";
import Home from "./components/home/Home";

export const routes = [
  {path : '',component : Home, titulo: 'Home'},
  {path: '/cadastro' ,component: Cadastro, titulo: 'Cadastro'}
]; //configurações das rotas de acordo com os componentes

