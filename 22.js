// Rotina de tratamento de erro - Try catch finaly

//Try -> iremos inserir a rotina que queremos tratar

//Catch -> Passa o erro para cá e faz-se o tratamento de determinado erro

//Finaly -> Não é um bloco obrigatório

var num; //Máximo é dez

try{ //Para executar o bloco do catch escrevemos write errôneamente de propósito
  num = prompt("Digite um valor");
  if (num > 10)
    throw new Error("Valor inválido. O valor inserido deve ser menor que dez!")//Gera a excessão
    document.write("Valor: " + num)
}catch(e){
  //Para tratar o erro:
  document.write("ERRO: " + e.message)
  //console.log("Mensagem de erro: " + e.message)
}finally{//Será executado com ou sem erro
  document.write("<br>Fim do tratamento.")
}
