//Escopo de variáveis
var nomeCor = "Vermelho";
function cor(){
  var nomeCor = "Azul"; /*Sem que haja o var aqui, será impresso a palavra azul no write que está fora da função*/
  document.write(this.nomeCor+" "+ nomeCor +"<br>"); /*graças ao this faz com que seja impresso a variável global, ao invés da variável de escopo local - ou seja, o da função*/
}
cor();
document.write(nomeCor);