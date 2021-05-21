const assert = require('assert');

function sumAllNumbers(array) {
  total = 0;
  for (number of array) {
    total += number;
  }
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);