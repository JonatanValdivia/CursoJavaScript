//SetInterval, setTimeout

// setTimeout -> Faz a chamada da função (callback) no tempo especificado, após um tempo, ele chama a função e termina

// setInterval -> repete a função de acordo com o tempo determinado, repetindo de acordo com o tempo. Cancelamos esse tempo com clearInterval();

//Criando uma função para fazer a mudança aleatória de cor

const $ = (element) => document.querySelector(element);

var tempo2;

const mudarCorSetTimeout = () =>{
  var elementoDIv = document.getElementById('div'); 
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  elementoDIv.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  // console.log("("+r+","+g+","+b+")")
}

const mudarCorSetInterval = () =>{
  var elementoDIv = document.getElementById('div2'); 
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  elementoDIv.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  // console.log("("+r+","+g+","+b+")")
}


/*Evento da div1 - setTimeout*/
$('#bt1').addEventListener('click', () =>{
  var tempo = setTimeout(mudarCorSetTimeout, 300); //Só vai chamar uma vez a função e depois acabou
});

/*Eventos da div2 - setInterval*/
$('#bt3').addEventListener('click', () =>{
  this.tempo2 = setInterval(mudarCorSetInterval, 300);
})
$('#bt4').addEventListener('click', () =>{
  clearInterval(this.tempo2)
})



