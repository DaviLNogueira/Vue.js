import Cadastro from "./components/cadastro/Cadastro";
import Home from "./components/home/Home";

export const routes = [
  {path : '',name : 'home' ,component : Home, titulo: 'Home' , menu: true},
  {path: '/cadastro' , name : 'cadastro' ,component: Cadastro, titulo: 'Cadastro', menu: true},
  {path: '*' ,component: Home, menu: false} // todas as paginas que não se encaixarem
]; //configurações das rotas de acordo com os componentes

