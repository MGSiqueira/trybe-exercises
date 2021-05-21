const assert = require('assert');

function wordLengths(array) {
  newArray = [];
  for (word of array) {
    newArray.push(word.length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);