/**
 * toString() -> converte um tipo primitivo para String.
 * 
 * trim() -> Remove os espaços no início e no final do texto (dá para ver isso melhor num alert())
 * 
 * "TESTANDO \"CARACTERES\" ESPECIAIS" -> desta forma podemos imprimir uma String com aspas duplas e dentro dela haver outras aspas duplas sem interpretar elas.
 * texto4 = "TESTANDO \\CARACTERES\\ ESPECIAIS";
 * 
 * \n -> faz uma quebra de linha -> funciona no console, alert... n~so no HTML
 */

var numero = 13;
var texto = document.querySelector('p').innerHTML;

// Conversão de base:
document.write(numero.toString()+"<br>");
document.write(numero.toString(2)+"<br>");//Converter em binário
document.write(numero.toString(8)+"<br>");//converter em base oito
document.write(numero.toString(16)+"<br>");//Converter em base hexadeciaml

var texto2 = "Algumas pessoas, uma vez que você as amou, tornam-se suas para sempre, elas se tornam parte de você, de quem você é, e, se algum dia decidir deixá-las partir, elas darão a volta e retornarão para você, porque agora são quem você é, ou elas destruirão você. algumas pessoas...";

var res = texto2.trim();
document.write("<br>"+res)

var texto3 = "TESTANDO \"CARACTERES\" ESPECIAIS";
document.write("<br><br><br>"+texto3);

var texto4 = "TESTANDO \\CARACTERES\\ ESPECIAIS";
document.write("<br><br><br>"+texto4);