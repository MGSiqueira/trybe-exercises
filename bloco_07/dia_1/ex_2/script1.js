const fatorial = numero => {
  let resultado = numero;
  for (let index = 0; index < numero; index += 1) {
    resultado *=  numero - 1
    numero -= 1
  }
  console.log(resultado);
}

fatorial(5);