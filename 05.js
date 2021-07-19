//Prompt
let InformeSeuNome = prompt('Informe o seu nome',);
document.write(InformeSeuNome);

if(InformeSeuNome != "" && InformeSeuNome != null){
  alert('Guardamos seu nome, ' + InformeSeuNome) + "! ";
}