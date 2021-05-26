const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Ex1
function authorBornIn1947() {
  return books.find((id) => id.author.birthYear === 1947).author.name;
}
console.log(`Data de nascimento do autor: ${authorBornIn1947()}`)
assert.strictEqual(authorBornIn1947(), 'Stephen King');

// Ex2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((id) => {
    if (!nameBook || nameBook.length > id.name.length) {
      nameBook = id.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(`Livro com o nome mais curto: ${smallerName()}`)
assert.strictEqual(smallerName(), 'Duna');

// Ex3
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((id) => id.name.length === 26);
}
console.log('Livro com título de 26 caracteres: ');
console.log(getNamedBook())
assert.deepStrictEqual(getNamedBook(), expectedResult3);

// Ex4
const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
console.log('Livros em ordem de lançamento descrescente: ');
console.log(booksOrderedByReleaseYearDesc());
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult4);

// Ex5
const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  return books.every((id) => id.author.birthYear > 1900);
}
console.log(`Todos os autores nasceram depois de 1900? ${everyoneWasBornOnSecXX()}`)
assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

// Ex6
const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((id) => id.releaseYear > 1980 && id.releaseYear < 1991)
}
console.log(`Algum livro foi lançado na decada de 80? ${someBookWasReleaseOnThe80s()}`);
assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

// Ex7
const expectedResult7 = false;
// não feito por mim
function authorUnique() {
  return books.every((book) =>
  !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult7);
