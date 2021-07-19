//Blocos de comando
//Como usar? O uso da chave é obrigátório quando é necessário delimitar um número maior do que um de uma instrução de blocos. Qunado é uma instrução por linha, a chave não é obrigatória:

var num = 09;

if(num > 10)
  res = "Maior que dez";
else
  res = "Menor que dez";


document.write(res);

//As vezes pode ser feito assim:

var idade = 18;
var msg;
if(idade > 18) msg = "Maior de idade";
else msg = "Menor de idade";

//Agora quando for mais de uma instrução, a chave se faz obrigatória, para delimitação do código: (o que faz parte do if e o que faz parte do else)
var registro = 19;
if(registro == 15){
  document.write("<br>Registro correto");
  alert(registro);
}else{
  registro = "incorreto"
  document.write("<br>Registro incorreto");
  alert(registro);
}
