const promise = () => new Promise((resolve, reject) => {
  const array =[];
  for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 50) ** 2);
  }
  const soma = array.reduce((acc, number) => acc + number, 0);
  (soma < 8000) ? resolve(soma) : reject();
});

promise()
  .then((soma) => [2, 3, 5, 10].map((number) => soma / number))
  .then((result) => result.reduce((acc, element) => acc + element, 0))
  .catch(() => console.log('É de mais de 8000! Essa promise deve estar quebrada!'));