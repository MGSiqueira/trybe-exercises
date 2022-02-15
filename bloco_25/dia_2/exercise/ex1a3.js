// ex 1
function mathOperation(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    // ou return new Promise
    if (
      typeof(a) !== 'number'
      || typeof(b) !== 'number'
      || typeof(c) !== 'number') {
        return reject('Todos os parâmetros devem ser números')
      }
    const resultado = (a + b) * c;

    if (resultado < 50) reject(`Valor muito baixo: ${resultado}`);

    resolve(resultado);
  });
  return promise;
};

// mathOperation(10, 10, 2)
//   .then(resultado => console.log(`Sucesso: ${resultado}`))
//   .catch(err => console.log(err));

// ex 2

function consumeMath() {
  const array = [];
  for(let i = 0; i < 3; i += 1) {
    array.push(Math.round(Math.random() * 10))
  }
  mathOperation(...array)
    .then(resultado => console.log(`Sucesso: ${resultado}`))
    .catch(err => console.log(err));
}
// consumeMath();

async function consumeMathAsync() {
  const array = [];
  for(let i = 0; i < 3; i += 1) {
    array.push(Math.round(Math.random() * 10))
  }
  try {
    const resultado = await mathOperation(...array);
    console.log(`Sucesso: ${resultado}`);
  } catch(erro) {
    console.error(erro);
  }
};
consumeMathAsync();
