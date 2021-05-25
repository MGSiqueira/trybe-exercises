const sorteio = (bet, callback) => {
  let winnerNumber = Math.ceil(Math.random() * 5);
  return callback(winnerNumber, bet) ? 'Parabéns! Você ganhou.' : 'Tente de novo'
}

const check = (number, bet) => number === bet;

console.log(sorteio(3, check));
