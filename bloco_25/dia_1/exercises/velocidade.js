const readline = require('readline-sync');


function calculaVelocidadeMed() {
  const distancia = readline.questionInt('Qual a distancia? ');
  const tempo = readline.questionFloat('Qual o tempo? ');

  const velocidadeMedia = distancia / tempo;

  console.log('A velocidade média era de %sm/s.', velocidadeMedia.toFixed(2));
}

calculaVelocidadeMed();
