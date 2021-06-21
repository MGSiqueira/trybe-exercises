const myRemove = require('./ex_2.js');

test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
});

test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3 ,4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Vefirica se o array passado por parametro não sofreu alterações', () => {
  const arr = [1, 2, 3, 4];
  myRemove(arr, 3);
  expect(arr).toEqual([1, 2, 3, 4]);
})

test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3 ,4], 5)).toEqual([1, 2, 3, 4]);
});