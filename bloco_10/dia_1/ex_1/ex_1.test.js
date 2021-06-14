const sum = require('./ex_1');

test('Testa se o retorno de sum(4, 5) é igual a 9.', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Testa se o retorno de sum(0, 0) é igual a 0.', () => {
  expect(sum(0, 0)).toBe(0);
});