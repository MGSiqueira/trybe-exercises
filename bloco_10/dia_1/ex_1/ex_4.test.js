const myFizzBuzz = require('./ex_4.js');

test('Um número dividido por 3 e 5 deve retornar fizzbuzz.', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Um número dividido por 3 deve retornar fizz.', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

test('Um número dividido por 5 deve retornar buzz.', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('Um número que não é divisível por 3 nem por 5 deve retornar o próprio número.', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

test('Se o parâmetro não for um número, o retorno da função deve ser falso.', () => {
  expect(myFizzBuzz('8')).toBeFalsy();
});