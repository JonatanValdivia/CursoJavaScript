//Métodos para trabalhar com Strings: 
//Metodos para strings: search, replace, charAt, charCodeAt, String.fromCharCode, concat
/**
 * SEARCH: diferente do match, ele não retorna array e não trabalha com os mesmos, pois retorna apenas a primeira ocorrência encontrada. Ele retorna o índice onde a mesma foi encontrada dentro da array (String).
 *
 * REPLACE: substitui uma palavra/frase por outra
 * 
 * CHARAT: indicamos a posição que queremos e é retornado a letra do mesmo
 * 
 * CHARCODEAT: indicamos o índice e é retornado o código do caractere
 * 
 * String.fromCharCode(97): passamos somente um código e é retornado para nós a tecla do mesmo;
 * 
 * CONCAT: concatena/funde uma string com outra
 * */
var texto = document.querySelector('p').innerHTML

const procurarPalavra = () =>{
  // var res = texto.search(/destruirão/i);//O g não funciona
  //var res = texto.replace(/a/ig, "***");//Substitui todas as letras "a" por ***
  // for(var i = 0; i <= 277; i++){
  //   var res = texto.charAt(i);//Indicamos a posição que queremos e é retornado para nós a letra
  //   document.write("Quantidade: "+res+ "</br>") 
  // }
  
  // var res = texto.charCodeAt(2);//Retorna o código da letra A (maiúscula)
  // var res = String.fromCharCode(97);//Retorna qual o código de determinada letra
  
  var texto2 = "ou elas destruirão você";
  var res = texto.concat(texto2);
  document.write("Resultado: "+res+ "</br>")
}

procurarPalavra();