//Slider - Fazendo a 'máquina' de um

//A primeira coisa recomendada ao trabalhar com slides, é: um pré-carregamento das imagens.

const $ = (element) => document.querySelector(element)

var imgs = [];
var slider = $('#dvSlider')
var imgAtual;
var maxImg; 
var tempo;
var buttonAvancar = $('#avancar');
var buttonVoltar = $('#voltar');

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

const inicia = () =>{
  preCarregamento();
  imgAtual = 0;
  maxImg = imgs.length-1;//Como nosso array começa com quatro, então nada mais certo o máximo de imagens ser quatro
  carregarImg(imgAtual);
}

const troca = () =>{
  imgAtual++;
  if(imgAtual > maxImg){
    imgAtual = 0;
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

tempo = setInterval(troca, 2000)

inicia();

buttonAvancar.addEventListener('click', ()=>{
  clearInterval(tempo);
  avancar()
})

// buttonVoltar.addEventListener('click', ()=>{
//   clearInterval(tempo);
//   voltar();
// })


