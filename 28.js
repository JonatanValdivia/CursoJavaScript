//Manipulando data e hora

//Para pegar determinados métodos: get
//Para midificar determinados métodos: set

let data = new Date();
//Quando queremos trabalhar com datas/aumentar mais dois dias, por exemplo, devemos também aumentar o dia semanal, para aparecer o certo, então, fazemos: 
let novaData = new Date();
let testeNovaData = new Date(1996, 03, 07)//Ano, mes, dia, hora, min, seg, mil
novaData.setDate(data.getDate()+2) //Somando mai dois dias
novaData.setDate(data.getDate()-10) //Subtraindo dez dias
novaData.setFullYear(data.getFullYear()+2)//Somando mais dois anos
let diaSemanal = novaData.getDay()
let dia = novaData.getDate()
let mes = novaData.getMonth();
let ano = novaData.getFullYear();
let hora = novaData.getHours();
let minuto = novaData.getMinutes();
let segundo = novaData.getSeconds();

document.write("<br><br>Horário: "+hora+":"+minuto+":"+segundo)

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var diasSemanais = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

document.write("<br><br>Dia: " + dia +", "+ diasSemanais[diaSemanal]+", "+ meses[mes] +" de "+ ano);

document.write("<br><br>" + testeNovaData.getDate() + "/" + testeNovaData.getMonth() +"/"+ testeNovaData.getFullYear())

