const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (number of array) {
    if (number > 10) {
      results.push(number);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
