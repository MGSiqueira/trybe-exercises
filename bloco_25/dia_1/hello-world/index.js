console.log("Hello, world!");

const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');

console.log('Hello, %s! You are %s years old!', name, age);
