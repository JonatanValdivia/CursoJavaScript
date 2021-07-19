//O for necessita de três parâmetros: começo, até onde vai e a contagem. Pode-se ser quatro, quando tem o passo. 
var num = [];
// num.push(0);
// num.push(01);
// num.push(02);
// num.push(03);
// num.push(04);
// num.push(05);

// for(cont = 0; cont <= 5; cont++){
//   //num.push(cont)
//   num.push(prompt("Digite um número", ""));
// }

// for (cont = 0; cont <= 5; cont++){
//  document.write(num[cont] + "<br>");
// }

var mochila = [['CORDA', 1], ['FACA', 1], ['LANTERNA', 2], ['BATERIA', 10], ['REMÉDIO', 5], ['LIVRO DE ERVAS MEDICINAIS', 1]] 
console.log(mochila);

for (cont = 0; cont <= 5; cont++){
  for(var c = 0; c < 2; c++){
    document.write(mochila[cont][c] + " ");
  }
  document.write("<br>")
}