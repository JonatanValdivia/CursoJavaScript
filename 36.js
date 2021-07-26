/*Base para movimentação de personagens em games (keyUp, keydown e setInterval)*/
const $ = (element) => document.querySelector(element) 

//Precisaremos de tais informações:
var dx = 0; //Direção no eixo "X"
var dy = 0; //Direção no eixo "Y"
var px = 0; //A posição definida na horizontal
var py = 0; //A posição definifa na vertical
var velocidade = 10; //A velocidade definida (se for muito baixa, é só diminuir o setInterval, ou vise-versa);
var objeto = $('#divAcaoMover'); //O objeto que será movimentado na tela


const teclaPressionada = () =>{
  var tecla = event.keyCode;
  if(tecla == 37){
    dx = -1;
  }else if(tecla == 38){
    dy = -1;
  }else if(tecla == 39){
    dx = 1;
  }else if(tecla == 40){
    dy = 1;
  }
}
//Função para parar de deslocar. Ou seja, quando o evento keyUp for acionado, então irá parar de deslocar pois as determinadas variáveis de deslocamento receberão valor zero
const teclaSolta = () =>{
  var tecla = event.keyCode;
  if(tecla == 37){
    dx = 0;
  }else if(tecla == 38){
    dy = 0;
  }else if(tecla == 39){
    dx = 0;
  }else if(tecla == 40){
    dy = 0;
  }
}

const enterFrame = () =>{
  px += dx * velocidade;//Dez
  py += dy * velocidade;//Menos dez
  objeto.style.left = px+"px";
  objeto.style.top = py+"px";
}

var tempo = setInterval(enterFrame,20); 

document.addEventListener('keydown', teclaPressionada);
document.addEventListener('keyup', teclaSolta)




