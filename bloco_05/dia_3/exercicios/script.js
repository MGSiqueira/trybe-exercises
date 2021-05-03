function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
  };
  
 createDaysOfTheWeek();
 //Ex1. Adiciona os dias do mês;
function adicionaDias() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i++){
    const liDays = document.createElement('li');
    liDays.innerHTML = dezDaysList[i];
    liDays.className = 'day';
    ulDays.appendChild(liDays);
  }   
}
adicionaDias();
//Ex1. Adiciona as classes requeridas;
function addClassDays() {
  const monthDays = document.getElementsByClassName('day');
  for (let i = 0; i < monthDays.length; i++) {
    const days = monthDays[i]
    if (days.innerHTML == 24 || days.innerHTML == 25 || days.innerHTML == 31) {
      days.classList.add('holiday');
    }
    if (days.innerHTML == 4 || days.innerHTML == 11 || days.innerHTML == 18 || days.innerHTML == 25) {
      days.classList.add('friday');
    }
  }
}
addClassDays();
//Ex2. Cria bUtão;
function criaButao(string){
  const divButao = document.querySelector('.buttons-container');
  const butao = document.createElement('button');
  butao.innerHTML = string;
  butao.id = 'btn-holiday';
  divButao.appendChild(butao);
}
criaButao('Feriados');
//Ex3. Faz o botão mudar as cores dos dias de feriado;
const butao = document.querySelector('#btn-holiday');
let clicado = false;
butao.addEventListener('click', () => {
  let days = document.getElementsByClassName('day');
  if ( clicado === false) {
    for (let i = 0; i < days.length; i++) {
      if (days[i].classList.contains('holiday')) {
        days[i].style.backgroundColor = 'grey';
      }
    }
    clicado = true;
  } else {
    for (let i = 0; i < days.length; i++) {
    days[i].style.backgroundColor = 'rgb(238, 238, 238)'
    }
    clicado = false;
  }
});