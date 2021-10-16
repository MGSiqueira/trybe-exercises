const readline = require('readline-sync');

function sorteio() {
  const randomNumber = parseInt(Math.random() * 10);
  const resposta = readline.questionInt('Chute um numero: ');

  if (randomNumber === resposta) {
    console.log('Venceu =)');
  } else {
    console.log('Perdeu =(')
  }

  const playAgain = readline.question('Jogar de novo?(s/n) ');

  if (playAgain !== 's') return console.log('Ok, bye!');

  sorteio();
};

sorteio();
