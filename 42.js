//Modernizando o slider

const $ = (element) => document.querySelector(element)

var imgs = [];
var slider = $('#dvSlider')
var imgAtual;
var maxImg; 
var tempoContador;
var buttonAvancar = $('#avancar');
var buttonVoltar = $('#voltar');
var tempoTroca;
var vtempo;
var vload;
var dvbarra = document.getElementById('dvBarra')


const preCarregamento = () =>{
  var dowload = 1;
  for(var i = 0; i < 5; i++){
    imgs[i] = new Image();
    imgs[i].src = "../img/download"+dowload+".jfif";
    dowload++;
    console.log(imgs[i].src);//Retorno
  }
}

const carregarImg = (img) =>{
  slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

const anima = () =>{
  tempoTroca++;
  if(tempoTroca >= 200){
    tempoTroca = 0;
    troca(1);
  }
  vtempo = tempoTroca/2;
  dvbarra.style.width = vtempo + "%";
  requestAnimationFrame(anima);
}



const inicia = () =>{
  preCarregamento();
  imgAtual = 0;
  maxImg = imgs.length-1;//Como nosso array começa com quatro, então nada mais certo o máximo de imagens ser quatro
  tempoContador = 0; //tempo será usada como um contador para o tempo
  carregarImg(imgAtual);
  tempoTroca=0;
  anima();
}

const troca = (dir) =>{
  tempoTroca = 0;
  imgAtual+=dir;
  if(imgAtual > maxImg){
    imgAtual = 0;
  }else if(imgAtual < 0){
    imgAtual = maxImg;
  }
  carregarImg(imgAtual);
}

const avancar = () =>{
  imgAtual++;
  if(imgAtual == 5){
    imgAtual = 0;
  }
  carregarImg(imgAtual)

}

const voltar = () =>{
  carregarImg(imgAtual - 1)

}

inicia();

buttonAvancar.addEventListener('click', ()=>{
  troca(-1)
})

buttonVoltar.addEventListener('click', ()=>{troca(1)})


