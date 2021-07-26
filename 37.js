//Relógio digital
//Mesclaremos o setInterval para atualizar essa hora a cada segundo.
const $ = (element) => document.querySelector(element)

const relogio = () =>{
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();
  if(hora < 10){
    hora = "0"+hora;  
  }
  if(minuto < 10){
    minuto = "0"+minuto;
  }
  if(segundo < 10){
    segundo = "0"+segundo;
  }
  var horario = hora+":"+minuto+":"+segundo;

  var input = $('#relogio').value = horario;
}

var horaAutomatizada = setInterval(relogio, 60)
console.log(horaAutomatizada)