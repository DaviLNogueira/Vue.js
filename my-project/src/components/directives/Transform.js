import Vue from "vue";
Vue.directive('meu-transform',{ // implementação da diretiva

  bind(el,binding,vnode){
    let current = 0 ;

    el.addEventListener('dblclick',function (){
      current += 90;
      el.style.transform =`rotate(${current}deg)`; // girar 90° graus
    });
  }


});
