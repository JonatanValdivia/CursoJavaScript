//requestAnimationFrame -> função para administrar animações. Mais simples: a administração do tempo/intervalo é feita por ele, não manualmente como fazímaos com setInterval

var jogador;
var velocidade;
var dx;
var dy;
var px;
var py;
var anima;
var estado;//Se está andando(1) ou parada(0)

const game = () => {
  px += dx * velocidade;//Deve receber a própria posição mais a direção no eixo "x" vezes a velocidade
  // py += dy * velocidade;
  jogador.style.left=px+"px";
  if(px > 600){
    dx= -1;
  }
  if(px < 0){
    dx = 1
  }
  // jogador.style.top=py+"px";
  anima = requestAnimationFrame(game);
}

const inicial = () =>{
  
  estado = 1;
  velocidade = 3;
  dx = 1; //Queremos iniciar movendo-o para a direita
  dy = 0;
  px = 0;
  py = 0;
  jogador = document.getElementById('jogador');
  jogador.style.backgroundColor = "blue"; 
  jogador.addEventListener("click", moverParar)
  
  game();
}

const mover = () =>{
  if(!estado){//Se estado for diferente de verdadeiro (1), então faça:
    estado = 1;
    jogador.style.backgroundColor = "blue"; 
    anima = requestAnimationFrame(game);
  }
}

const parar = () =>{
  if(estado){
    estado = 0;
    jogador.style.backgroundColor = "black"; 
    cancelAnimationFrame(anima)
  }
}

const moverParar = () =>{
  if(estado){
    estado = 0;
    jogador.style.backgroundColor = "black"; 
    cancelAnimationFrame(anima)
  }else{
    estado = 1;
    jogador.style.backgroundColor = "blue"; 
    anima = requestAnimationFrame(game);
  }
}

inicial();
document.getElementById('btn1').addEventListener('click', mover)
document.getElementById('btn2').addEventListener('click', parar)





