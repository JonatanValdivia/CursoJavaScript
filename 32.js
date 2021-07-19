//Eventos

function mudarAPosicao(){
  const div = document.getElementById('box-event')
  div.style.position = "absolute";
  div.style.left = Math.random()*500+"px";
  div.style.top = Math.random()*500+"px";
}

function mudarACor(){
  document.getElementById('box-event').style.backgroundColor = 'red';
}

function mudarACorClick(){
  document.getElementById('box-event').style.backgroundColor = 'blue';
}

const mudarPos = document.getElementById('box-event').addEventListener('mouseenter', mudarAPosicao)

const mudarCor = document.getElementById('box-event').addEventListener('click', mudarACor)

const mudarCorComClick = document.getElementById('mudarCor').addEventListener('click', mudarACorClick)