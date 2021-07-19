//getElementsByTagName()

const tagP = document.getElementsByTagName('p')

tagP[0].style.backgroundColor = 'red';

tagP[1].style.backgroundColor = 'green'

tagP[2].style.backgroundColor = 'blue';

tagP[3].style.backgroundColor = 'orange';

for(var i = 0; i <= tagP.length; i++){
  tagP[i].style.color = 'white';
}