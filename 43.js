//Manipulando atributos html por javaScript
//Três funções disponíveis:
//setAttribute -> adicionar determinado atributo em uma tag html
//removeAttribute -> remover determinado atributo de uma tag html
//hasAtribute -> verifica se determinado atributo já está na tag ou não.

const Imagem = document.getElementById("Imagem");
const trocarImagem = (imagem) =>{
  if(imagem == 1){
    Imagem.setAttribute("class", "c1");
  }else if(imagem == 2){
    Imagem.setAttribute("class", "c2");
  }else{
    Imagem.setAttribute("class", "c3");
  }
}

const removerImagem = (imagem) =>{
  Imagem.removeAttribute("class");
}

const verificarImagem = () =>{
  if(Imagem.hasAttribute("class")){
    alert('Class está na tag');
  }else{
    alert("Sem class na tag")
  }
}

const voltarCor = () =>{
  const corpo = document.body
  corpo.removeAttribute('id', 'backgroundBlack');
}

const MudarCor = () =>{
  const corpo = document.body
  corpo.setAttribute('id', 'backgroundBlack');
}




