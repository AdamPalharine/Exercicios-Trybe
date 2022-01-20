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

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}

console.log('Primeiro Autor Nascido em 1947:')
console.log(authorBornIn1947());
console.log(' ')

// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook; // declarado com undefined (false) no caso !nameBook declara que ela não é undefined (true)

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

console.log('Livro de menor Nome:')
console.log(smallerName());
console.log(' ')

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

console.log('Primeiro livro de 26 caracteres:')
console.log(getNamedBook());
console.log(' ')

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const expectedResult = [
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
  expectedResult.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log('Livros por Ordem de Lançamento')
console.log(expectedResult);
console.log(' ')

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
/* const expectedResult = false; */

function everyoneWasBornOnSecXX() {
    return books.every((book) => (book.author.birthYear > 1990 && book.author.birthYear <= 2000));
}

console.log('Todos os Autores nasceram no século XX')
console.log(everyoneWasBornOnSecXX());
console.log(' ')

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
/* const expectedResult = true; */

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log('Algum livro foi lançado na década de 80?')
console.log(someBookWasReleaseOnThe80s());
console.log(' ')

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
/* const expectedResult = false; */

function authorUnique() {
  return books.some((book) =>     
  !books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
};
 
console.log('Autores que nasceram no mesmo ano:')
console.log(authorUnique());
console.log(' ')
