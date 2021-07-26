//Formatação condicional
const $ = (element) => document.querySelector(element);

var tabela = $('table')
var notaSoma;

for(var j = 1; j < tabela.rows.length; j++){
  notaSoma = parseFloat(tabela.rows[j].cells[1].innerHTML) + parseFloat(tabela.rows[j].cells[2].innerHTML)
  tabela.rows[j].cells[3].innerHTML = notaSoma;
}

var notas = [];
notas[0]= document.getElementById('n0')
notas[1]= document.getElementById('n1')
notas[2]= document.getElementById('n2')
notas[3]= document.getElementById('n3')
for(var i = 0; i <= 3; i++){
  if(notas[i].innerHTML < 50){
    notas[i].style.color = 'red';
  }else if(notas[i].innerHTML < 70){
    notas[i].style.color = 'orange';
  }else{
    notas[i].style.color = 'blue';
  }
}

