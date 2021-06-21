document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Um texto a ele';
//irmão para elementoOndeVoceEsta
document.getElementById('pai').appendChild(document.createElement('div'));
document.getElementById('pai').lastElementChild.innerText = 'jaaj';
document.getElementById('pai').lastElementChild.id = 'filhoBastardoDoPai'
//filho para elementoOnceVoceEsta
document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('div'));
document.getElementById('elementoOndeVoceEsta').lastElementChild.innerText = 'jooj'
document.getElementById('elementoOndeVoceEsta').lastElementChild.id = 'terceiroEUltimoDeVerdadefilhoDoFilho'
//filho para primeiroFilhoDoFiho
document.getElementById('primeiroFilhoDoFilho').appendChild(document.createElement('div'));
document.getElementById('primeiroFilhoDoFilho').firstElementChild.innerText = 'juuj'
document.getElementById('primeiroFilhoDoFilho').firstElementChild.id = 'filhoDoPrimeiroFilhoDoFilho'
//acessa o terceiroFilho a partir do filho do primeiroFilhoDoFilho
document.getElementsByTagName('div')[5].parentElement.parentElement.nextElementSibling.innerText = 'jeej'

let prepareToDie = document.getElementsByTagName('div');
for (let i = prepareToDie.length - 1; i > 0; i -= 1) {
    let element = prepareToDie[i];
    if (element.id !== 'paiDoPai' &&
        element.id !== 'pai' &&
        element.id !== 'elementoOndeVoceEsta' &&
        element.id !== 'primeiroFilhoDoFilho') {
            console.log(element);
            element.parentElement.removeChild(element);
        }
}
