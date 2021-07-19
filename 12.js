//Switch - case
//Usa-se o switch  quando se sabe os valores de retorno, ao contrário de if/else/else if
var pos = 3;
var msg;
Number(pos);
switch(pos){
  case 1:
    msg = "Primeiro lugar!<br>Medalha de ouro"
    break;
  case 2:
    msg = "Segundo lugar!<br>Medalha de prata";
    break;
  case 3:
    msg = "Terceiro lugar!<br>Medalha de bronze";
    break;
  default:
    msg = "Não foi ao pódio!<br>Não obteve medalhas";
    break;
}

switch(pos){
  case 1:
  case 2:
  case 3:
    msg += "<br>Subiu ao pódio.";
    break;
  default:
    msg += "<br>Não obteve colocação!"
}

document.write(msg);
