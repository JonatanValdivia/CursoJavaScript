//Metodos para Strings: indexOf, lastIndexOf, localeCompare, slice, split, substr, toLowerCase, toUpperCase.
/**IndexOf: retorna a posição de um caractere se especificar qual. Se determinada palavra não existir, então retorna -1 
 * 
 * lastIndexOf: diferente do indexOf, retorna a posição do último caractere pesquisado
 * 
 * localeCompare: compara duas Strings. Se o resultado for zero, siginifica que as Strings são iguais, e for diferente de zero, siginifica que são diferentes uma da outra.
 * 
 * slice: corta a string em um ponto específico até outro, mantendo o intervalo. Ou seja, passamos o valor inicial do corte e o final.
 *
 * split: vai "picar" toda a nossa String, no caracere indicado. Retorna um array com todas as palavras.
 * 
 * substr: semelhante ao método slice, porém faz o seguinte: indicamos a posição inicial e o tamanho deste corte.
 * 
 * toLowerCase: deixa todos os caracteres minúsculas 
 * 
 * toUpperCase: deixa todos os caracteres maiúsculos
*/

var texto = document.querySelector('p').innerHTML
var texto2 = document.querySelector('#texto2').innerHTML
// var res = texto.indexOf('Algumas')
// if(res < 0){
//   document.write('<p style="color: red">Não encontrada a palavra</p>')
// }else{
//   document.write('<p style="color: green">Palavra encontrada</p>')
// }

// var res = texto.lastIndexOf('você')

// var res = texto.localeCompare(texto2)//Retorna -1

// if(res != 0){
//   document.write('<p style="color: red">Palavras diferentes</p>')
// }else{
//   document.write('<p style="color: green">Palavras iguais</p>')
// }

// var res = texto.slice(10, 17)//Retorna apenas "pessoas"
// var res = texto.split('a')//remove todas as letras "a" do texto.
// var res = texto.substr(2, 8)

var res = texto.toLowerCase();

// var res = texto.toUpperCase()
document.write('</br>Resultado: '+res)
