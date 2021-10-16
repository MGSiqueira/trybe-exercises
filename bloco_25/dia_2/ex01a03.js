// ex01
function arithmeticFunction(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number'
    || typeof(b) !== 'number'
    || typeof(c) !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const resultado = (a + b) * c;
    
    if (resultado < 5000) reject(new Error('Valor muito baixo'));
    resolve(resultado);
  });
  return promise;
};

// arithmeticFunction(10, 10, 10)
//   .then(resolve => console.log(resolve))
//   .catch(err => console.log(err));

// arithmeticFunction(10, 10, 'a')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// arithmeticFunction(5, 5, 4)
//   .then(xablau => console.log(xablau))
//   .catch(erro => console.log(erro));

// ex02

function generateRandom() {
  return Math.floor(Math.random() * 100 + 1);
}

function callArithmeticFunction() {
  const randomNumbers = Array.from({ length: 3 }).map(generateRandom);

  arithmeticFunction(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message));
}

callArithmeticFunction();

// ex03

async function callArithmeticAsync() {
  const randomNumbers = Array.from({ length: 3 }).map(generateRandom);

  try {
    const result = await arithmeticFunction(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

callArithmeticAsync();
