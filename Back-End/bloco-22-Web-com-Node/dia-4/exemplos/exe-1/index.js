const express = require('express');
const app = express();

const PORT = 3001;

const books = [
  {id: 1, title: 'Perdida', author: 'Carina Rissi'},
  {id: 2, title: 'Procura-se um Marido', author: 'Carina Rissi'},
  {id: 3, title: 'Encontrada', author: 'Carina Rissi'},
  {id: 4, title: 'O Mundo de Luna', author: 'Carina Rissi'},
  {id: 5, title: 'Destinado', author: 'Carina Rissi'},
  {id: 6, title: 'A Mentira Perfeita', author: 'Carina Rissi'},
]

app.get('/', (req, res) => {
  res.send('Hello, World!');
  // oq eu quero que minha requisição faça, no caso, qual a resposta que eu espero receber
});

app.get('/books', (req, res) => {
  res.json(books);
  //equivalente ao send, com a diferença de onde ele vai retornar no servidor
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
