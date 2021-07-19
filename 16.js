//Arrays multidimencionais 
var mochila = new Array();
            //Obj  //qtd
var item1 = ["Corda", 2],
    item2 = ["Faca", 1],
    item3 = ["Cura", 5],
    item4 = ["Prego", 35]

mochila.push(item1)
mochila.push(item2)
mochila.push(item3)
mochila.push(item4)

mochila.forEach(element => {
  console.log(element);
});

console.log(mochila[0][0]);
console.log(mochila[0][1]);
console.log('............');
console.log(mochila[1][0]);
console.log(mochila[1][1])
console.log('............');
console.log(mochila[2][0]);
console.log(mochila[2][1]);
console.log('............')
console.log(mochila[3][0])
console.log(mochila[3][1])
console.log('............')