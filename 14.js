//Array/vetor - Parte2 - Métodos da classe array
//push -> insere no final da array
//unshift -> insere no inicio da array

const arr = new Array;
arr.push(1);
arr.unshift(4);
arr.push(3)
arr.push(5)
arr.unshift(1000);
console.log(arr);

//pop -> remove um elemento do array (no caso, o último)
//shift
arr.pop();
console.log(arr);
arr.shift()
console.log(arr);

arr.splice(1, 1);
console.log(arr);

//splice -> remove um elemento, ou mais de um. -> pode remover no meio da array, no final ou inicio. 
