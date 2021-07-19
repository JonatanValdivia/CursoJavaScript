//Declaração de variável com let

//Dependente da questão do escopo, onde fora a sua declaração. Seu valor é mutável, ao contrário de const.

let num = 10;
document.write(num)
if(num == 10){
  num = 9;
  document.write(num)
}
document.write(num)