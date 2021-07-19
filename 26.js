//querySelectorAll() -> uma gama maior de elementos 
const p = document.querySelectorAll('.testeQuerySelectorAll > p');

for(var i = 0; i <= p.length; i++){
  p[i].style.backgroundColor = 'yellow';
}

const pClassTitulo = document.querySelectorAll('p.titulo').style.color = 'red'



