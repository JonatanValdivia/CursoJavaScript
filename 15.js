//Mais métodos de arrays
//IndexOf -> pesquisar determinado elemento
//sorth -> ordenação da array
//reverse -> inverter a ordem dos elementos na array
//concat -> conatenar elementos 
//Join
const arr = new Array;
arr.push(1);
arr.unshift(4);
arr.push(3)
arr.push(5)
arr.unshift(2);
console.log(arr);
//Buscando o valor, ele retorna a posição do mesmo
console.log(arr.indexOf(3))
//Retornará -1, por não existir determinado elemento dentro desta array
console.log(arr.indexOf(329));
console.log(arr.sort());

console.log(arr.reverse())

var numeros; 
//Retorna todos os elementos da variável arr, em tipo String e separados por vírgulas
numeros = arr.join();
console.log(numeros);

//concat -> Concatenar duas arrays 
let mochila1 = ['faca', 'corda', 'canivete']
let mochila2 = ['guarda-chuva', 'protetor-solar', 'blusa'];
mochila1.pop(); //Retirou um elemento de mochila
//Pegou todos os elementos de mochila1 e mochila2 e juntou-os todos. 
let mochila = mochila1.concat(mochila2);
console.log(mochila)
console.log(mochila.length);


