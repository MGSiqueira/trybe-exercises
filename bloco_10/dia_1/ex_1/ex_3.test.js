const myRemoveWithoutCopy = require('./ex_3.js');

test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado.', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2 ,4]);
});

test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verifica se o array passado para a função sofreu alterações.', () => {
  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 3);
  expect(array).toEqual([1, 2, 4]);
});

test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3 ,4], 5) retorna o array esperado.', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
