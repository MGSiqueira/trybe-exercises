const { obj1, obj2, obj3 } = require('./ex_5.js');

test('Testa se obj1 é igual a obj2.', () => {
  expect(obj1).toEqual(obj2);
})

test('Testa se obj1 é diferente do obj3.', () => {
  expect(obj1).not.toEqual(obj3);
})

test('Testa se obj2 é diferente do obj3.', () => {
  expect(obj2).not.toEqual(obj3);
})
