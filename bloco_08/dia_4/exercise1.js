const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((novoArray, array) => {
    for (let i = 0; i < array.length; i++) {
      novoArray.push(array[i]);
    }
    return novoArray;
  }, [])
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);