const readline = require('readline-sync');

const calculaImc = () => {
  const altura = readline.questionInt('Qual a sua altura em centimetros? ');
  const peso = readline.questionInt('Qual o seu peso? ');

  const imc = peso / (altura / 100) ** 2;

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
  }

  if (imc > 40) {
    console.log('Situação: Obesidade graus III e IV');
  }
  
  console.log(imc.toFixed(2));
}

calculaImc();
