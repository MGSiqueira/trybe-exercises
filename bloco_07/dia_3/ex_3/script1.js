const assert = require('assert');

const greetPeople = (people) => {
  newArray = [];
  for (person of people) {
    let greeting = 'Hello ';
    newArray.push(greeting += person);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
