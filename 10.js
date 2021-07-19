//if aninhado = quando temos vários if dentro de outro
var nota = prompt("Digite a sua nota:");
Number(nota);
var res;

if(nota >= 60){
  res= "Aprovado ";
    if(nota >= 95){
      if(nota == 100){
        res+="com excelência!";
      }else{
        res += "com louvor!";
      }
    }else{
      res += "por nota na média!";
    }
}else if(nota >=40){
  res = "Recuperação";
}else{
  res = "Reprovado "
  if(nota >= 20){
    res += "por nota baixa!";
  }else{
    res += "com louvor!";
  } 
}

document.write(res);