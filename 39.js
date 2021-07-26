//Recursividade -> recurso computacional.É uma função que chama a si própria diversar vezes

//Pode servir para substiruir rotinas de looping, a vantagem é que o código fica mais simples e mais facilidade do programa rodar

function contador (min, max) {
 document.write(min+"<br>")
  if(min < max){
    contador(++min, max);
    // contador(10+min, max); //Com pulo
  }
}
// contador(10, 100);

//
function fatorial (numero){
  if(numero != 1){
    return numero * fatorial(numero-1);
  }else{
    return 1;
  }
}

var anima;

const girarElemento = (num) =>{

  const elemento = document.getElementById('quadrado')
  if(num > 0){
    elemento.style.transform = 'rotate('+(num)+'deg)';
    elemento.style.transition = '5s'
    ++num;
    if(num > 360){
      num = 0
    }
    anima = requestAnimationFrame(girarElemento);  
  }
}

let elemento = document.getElementById('quadrado').addEventListener('mouseover', () =>{ girarElemento(1)})

elemento = document.getElementById('quadrado').addEventListener('mouseout', () =>{
  cancelAnimationFrame(anima)
})




// document.write(fatorial(5) + "<br>")
// document.write(fatorial(13) + "<br>")
// document.write(fatorial(5) + "<br>")
