//Operadores lógicos
//Quando hão múltiplos testes lógicos, que envolvem o retorno para uma condição
var teste = prompt("Digite um valor");
Number(teste);

/*Faixa de acerto. Não pode haver do 31 ao 49*/

//&& -> retorna true caso todos os testes sejam verdadeiros
//Or -> retorna true mesmo que haja um teste que retorne false
if((teste >=20) && (teste <= 30) || (teste >= 50) && (teste <= 60)){
  document.write("Ganhou!");
}else{
  document.write("Perdeu!")
}