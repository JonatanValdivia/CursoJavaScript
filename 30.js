//Funções
function pularLinha(){
  document.write("<br><br>")
}
var nums = new Array(10, 8);

function media(nums){
  var tamanho = nums.length
  var soma = 0;
  for(var i = 0; i < tamanho; i++){
    soma +=nums[i];
  }
  return document.write(soma/tamanho);
}

media(nums);

pularLinha();

function somar(a, b){
  var res = a + b;
  return document.write(res)
}

somar(9,33)

pularLinha();
function escrever(){
  document.write("Curso de javascript - CFB Cursos <br>");
}

escrever();