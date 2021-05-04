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
        days[i].style.backgroundColor = 'white';
      }
    }
    clicado = true;
  } else {
    for (let i = 0; i < days.length; i++) {
      if(days[i].style.backgroundColor === 'white'){
        days[i].style.backgroundColor = 'rgb(238, 238, 238)'
      }
    }
    clicado = false;
  }
});
//Ex4. Cria bUtão 2;
function criaButao2(string) {
  const divButao = document.querySelector('.buttons-container');
  const butao = document.createElement('button');
  butao.innerHTML = string;
  butao.id = 'btn-friday';
  divButao.appendChild(butao);
}
criaButao2('Sexta-feira');
//Ex5. Faz o bUtão mudar sextas-feiras para SEXTOU;
const butao2 = document.querySelector('#btn-friday');
let clicado2 = false;
butao2.addEventListener('click', function () {
  let days = document.getElementsByClassName('day');
  if (clicado2 === false) {
    for (let i = 0; i < days.length; i++) {
      if (days[i].classList.contains('friday')) {
        days[i].innerHTML = 'SEXTOU';
      }
    }
    clicado2 = true;
  } else {
    for (let i = 0; i < days.length; i++) {
      if (days[i].innerHTML === 'SEXTOU') {
        days[i].innerHTML = parseInt(days[i-1].innerHTML) + 1;
      }
    }
    clicado2 = false;
  }
});
//Ex6. "Zoom In" e "Zoom out" nos dias dos mês;
function zoomOver () {
  const days = document.getElementById('days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}
zoomOver();
function zoomOut () {
  const days = document.getElementById('days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
zoomOut();
//Ex7. Cria e adiciona uma tarefa personalizada no calendário;
function span(string) {
  const div = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerHTML = string;
  div.appendChild(span);
}
span('Fazer maldade');
//Ex8. Adiciona cor em frente a tarefa personalizada;
function taskColor(cor) {
  const divMytasks = document.querySelector('.my-tasks');
  const divTask = document.createElement('div');
  divTask.style.backgroundColor = cor;
  divTask.className = 'task'
  divMytasks.appendChild(divTask);
}
taskColor('green');
//Ex9. Adiciona a função de task selected;
function addSelected () {
  const task = document.querySelector('.task');
  task.addEventListener('click', function () {
    if (task.className === 'task'){
      task.classList.add('selected');
    } else { task.className = 'task' }
  });
}
addSelected();
//Ex10. Faz o que o 10 pede;
function dayColor() {
  const selectedTask = document.getElementsByClassName('task selected');
  const days = document.getElementById('days');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119, 119, 119';
    }
  });
}
dayColor();