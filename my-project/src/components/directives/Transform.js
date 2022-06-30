import Vue from "vue";
Vue.directive('meu-transform',{ // implementação da diretiva

  bind(el,binding,vnode){
    let current = 0 ;

    el.addEventListener('dblclick',function (){
      let incremento = binding.value || 90 ;
      let animate = false;
      let efeito;

      if(!binding.arg || binding.arg === 'rotate'){
        if(binding.modifiers.reverse){
          current -=incremento;
        }else{
          current += incremento;
        }
        efeito =`rotate(${current}deg)`; // girar 90° graus
      }else if(binding.arg === "scale"){
        efeito = `scale(${incremento})`
      }



      el.style.transform = efeito
      //el documento do DOM
      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    })
  }

  }
);
