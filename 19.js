// var interacoes = prompt("Digite o tanto de interacoes que deseja: ", "")
 var num = 0; 
// while(num < interacoes){
//   console.log(`A${num}`);
//   num++;
// }

num = 10;
while(num--){
  console.log(num)
}

console.log('-----------------------------')

num = 0;
while(num < 10){
  console.log(num)
  num++;
}

num = true;
cont = 0;
while(num){
  document.write(`${cont}Test <br>`);
  cont++;
  if(cont>9){
    num = false;
  }
}

