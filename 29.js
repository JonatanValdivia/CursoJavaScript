//Math - Métodos e constantes matemáticas.
const pularLinha = ()  => document.write("<br><br>")
pularLinha()
document.write(Math.PI)//PI
pularLinha()
document.write(Math.E)//Euler
pularLinha()
document.write(Math.SQRT1_2)//Raiz quadrada de um sobre dois
pularLinha()
document.write(Math.SQRT2)//Raiz quadrada de dois
pularLinha()
document.write(Math.abs(-832))//Retorna o absoluto
pularLinha()
document.write(Math.ceil(10.1))//Arredondamento para cima
pularLinha()
document.write(Math.floor(9.9))//Arredonda para baixo
pularLinha()
document.write(Math.round(1.4))//É um arredondamento que segue a segunda explicação: se for 1.4, arredonda para baixo, ou seja: 1. Se for 1.5, arredonda para 2.
pularLinha()
document.write(Math.pow(4, 3))//Eleva um número a outro número
pularLinha()
document.write(Math.sqrt(169))//Retorna a raiz quadrada de um número que for determiando/passado.
pularLinha()
for(var i = 1; i <= 6; i++){
document.write(Math.round(Math.random()*59) + "... ") //document.write(Math.random().toFixed(1)*10) -> Retorna um valor aleatório entre 0 e 1, se não passado parâmetro algum
}
pularLinha()
document.write(Math.cos(90 * Math.PI/180) +" -------- "+ Math.sin(90 * Math.PI/180))//Cosseno, seno
pularLinha()
document.write(Math.max(1,2,3,9,5,6,7,8))//Retorna o maior núumero
pularLinha()
document.write(Math.min(2,3,4,5,6,4,3,1,4,133))//Retorna o menor número




