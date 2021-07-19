//if - else if - else = múltiplos retornos
var nota = prompt("Qual a sua nota");
Number(nota);
var res;
if(nota >= 7){
 res ='<p style="color: green">Aprovado!</p>';
}else if(nota < 7 && nota >= 5){
  res ="<p style='color: orange'>Em recuperação!<p>";
}else{
  res = "<p style='color: red'>Reprovado!</p>";
}

document.write(res);