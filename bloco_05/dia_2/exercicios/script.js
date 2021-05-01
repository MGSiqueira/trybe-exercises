//1. Adiciona a tag h1 com seu texto;
let h1 = document.body.appendChild(document.createElement('h1'));
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
//2. Adiciona uma tag div com a classe main-content;
let div1 = document.body.appendChild(document.createElement('div'));
div1.className = 'main-content'
//3. Adiciona uma tag div filha da div main-content com a classe center-content;
let div2 = div1.appendChild(document.createElement('div'));
div2.className = 'center-content';
//4. Cria a tag p e seu texto dentro da div do ex 3;
let p = div2.appendChild(document.createElement('p'));
p.innerHTML = "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."
//5. Adiciona uma div dentro da div main-content com a classe left-content;
let div3 = div1.appendChild(document.createElement('div'));
div3.className = 'left-content';
//6. Adiciona uma div dentro da div main-content com a classe right-content;
let div4 = div1.appendChild(document.createElement('div'));
div4.className = 'right-content';
//7. Cria a tag img filha da div left-content e adiciona src e classe small-image;
let img = div3.appendChild(document.createElement('img'));
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
//8. Adiciona a lista não ordenada;
let ul = div4.appendChild(document.createElement('ul'))
let numExtenso = ['UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ'];
for (let num in numExtenso) {
    let listIten = document.createElement('li');
    listIten.innerHTML = numExtenso[num];
    ul.appendChild(listIten);
}
//9. Adiciona 3 tags h3 na div main-content;
for (let i = 1; i <= 3; i++) {
    let h3 = document.createElement('h3');
    h3.innerHTML = 'hue' + i;
    div1.appendChild(h3);
}
//1. Adiciona a classe na tag h1;
h1.className = 'title';
//2. Adiciona a class description nas três h3;
let h3s = document.getElementsByTagName('h3');
for (let h3 in h3s) {
    h3s[h3].className = 'description';
}
//3. Remove a div left-content;
div3.remove();
//4. Centraliza a div right-content;
div4.style.marginRight = 'auto';
//5. Altera a cor d div center-content;
div2.style.backgroundColor = 'green';
//6. Remove as últimas li's com DEZ e NOVE;
let list = document.getElementsByTagName('li');
for (let i = list.length - 1; i >= 0; i -= 1) {
    if (list[i].innerText === 'DEZ' || list[i].innerText === 'NOVE') {
        list[i].remove();
    }
}
//Alt 6. 
ul.lastChild.remove();
ul.lastChild.remove();