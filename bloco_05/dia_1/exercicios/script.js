
document.getElementsByTagName('p')[0].innerText = 'O jeito como me vejo daqui dois anos não é muito diferente do jeito que me vejo agora, para falar a verdade se não ocorrer nenhum acidente muito grave ou algum outro tipo de evento indesperado, o jeito como eu me vejo agora é exatamente igual ao jeito que me vajo daqui a dois anos... Com os olhos.';


document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';


document.getElementsByClassName('center-content')[0].style.backgroundColor = 'rgb(255, 255, 255)';

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

let paragrafo = document.getElementsByTagName('p');
for (let i = 0; i < paragrafo.length; i += 1) {
    paragrafo[i].style.textTransform = 'uppercase';
    console.log(paragrafo[i]);
}
    

      /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

 Crie uma função que mude a cor do quadrado vermelho para branco.

 Crie uma função que corrija o texto da tag <h1>.

 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */