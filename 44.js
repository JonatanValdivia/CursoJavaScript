//String match -> procurar algo dentro da string por outra string indicada
//TEMOS OS MODIFICADORES DE PESQUISA: 
/*
  i -> busca sem case-sensitive
  g -> pesquisar TODAS as palavras pesquisadas sem parar na primeira encontrada. Pesquisa case-sensitive
  m -> Pesquisa normal sem armazenar na forna de array
*/
var texto = document.querySelector('p').innerHTML

const procurarPalavra = () =>{
  // var palavra = prompt('Digite a palavra aqui:')
  // var res = texto.match(/a/ig); procurar uma letra ou uma palavra
  // var res = texto.match(/[ao]/ig);//procrar cada uma das letras
  // var res = texto.match(/[^aeiou]/ig);//Contar todos os caracteres menos o as vogais
  // var res = texto.match(/[aeiou]/ig);//Retorna a quantidade de vogais
  // var res = texto.match(/[a-d]/ig);//Retornar todas as letras entre a e c
  var res = texto.match(/[\D]/ig);//São os metacarecteres (pesquisar uma tabela do mesmo). Aqui retorna todas as caracteres que não são números
  // if(res){
  //   alert('Palavra encontrada!')
  // }else{
  //   alert("Palavra "+res+" inexistente no texto.")
  // }
  document.write("Quantidade: "+res.length) //Retorna a quantidade de palavras (0, 1, 2, 3...,)
  document.write("<br><br>Quantidade: "+res[3]);//Indice da busca (menos quando se usa o atributo "m")
}

procurarPalavra();