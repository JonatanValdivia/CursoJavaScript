//Manipulando forms com JavaScript

//Para apontar para esses formulários, apontamos para: o índice desse formulário e junto, o id do formulário
//var fm = document.forms.length -> quantidade de forms
// var fm = document.forms[1].id; -> o form em si
// var fm = document.forms.item(0).id;
// var fm = document.forms.namedItem("curso1").id;
// var fm = document.forms.namedItem("curso2").innerHTML;
// document.write(fm) //Armazena a quantidade de formulários que hão na página (no uso do length). No caso do uso do id, retorna o nome dele. No innerHTML retorna todo o formulário

//Também podemos retornar os elementos do formulário:
// var fm = document.forms["curso1"].elements[0].value; //Pegamos o valor da input (pois é o elemento que tem value, diferente do lable);
// document.write(fm)

//Jeito aconselhavel de trabalhar:
var fm = document.forms[0];
var elementos = fm.elements;
elementos[0].style.backgroundColor = 'red';
elementos[0].value = 'CFB Cursos';
elementos[1].style.backgroundColor = 'green';

//Mudando todos os elementos:
for(var i = 0; i <= elementos.length; i++){
  elementos[i].style.border = "2px solid yellow"; //Colocando borda em todos os elementos do primeiro formulário;
}






