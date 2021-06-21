const sum = require('./ex_1');

test('Testa se o retorno de sum(4, 5) é igual a 9.', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Testa se o retorno de sum(0, 0) é igual a 0.', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Testa se a funcão retorna erro caso algum dos parametros seja uma string', () => {
  expect(() => { sum(4, '5') }).toThrow();
});

test('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});