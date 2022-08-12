const express = require('express');
const middlewares = require('./middlewares');
const app = express();

app.use(express.json());
// para o POST funcionar - conversor dos arquivos que estão no POST para JSON aqui

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
  // mid de erro, recebe quatro paramentros OBRIGATÓRIAMENTE
  // throw new Error('Erro ao acessar o banco de dados');
  // apenas dessa for, acaba vazando dados
  // const { limit } = req.query;
  // const result = books.slice(0, limit || books.length);
  // res.status(200).json(result);
  // equivalente ao send, com a diferença de onde ele vai retornar no servidor
  // status 200 indica que tudo esta certo

  try {
    throw new Error('Erro ao acessar o banco de dados');
    const { limit } = req.query;
    const result = books.slice(0, limit || books.length);
    res.status(200).json(result);
  } catch (error) {
    next();
    // o NEXT chama o midd de erro que estiver a seguir no código
    // res.status(500).json('Internal Server Error');
    // mover para a pasta de middleware
  }

});

/* rota com indicadores de parametros */
app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find(book => book.id === +id);
  //tem que tranformar para Number, pois vem em String
  //+id é a mesma coisa que fazer um parseint, no cso está fazendo a conversão de string para number

  if (!book) return res.status(404).json({ message: 'Livro não Encontrado' });
  // Em caso dos dados não serem encontrados

  res.status(200).json(book);
});

app.use(middlewares.authMiddleware);
// agora todas as rodas pedem por autorização do token, não precisaria estar assim >> app.get('/books', authMiddleware, (req, res)
// dependendo de onde for inserido, as validações a cima não serão implementadas

// Nova rota com POST - para adicionar coisas
// Como é uma nova rota do tipo POST, não há problema em ter o mesmo nome da rota GET
app.post('/books', (req, res) => {
  const { title, author} = req.body;

  const book = {id: Date.now(), title, author};
  books.push(book);
  res.status(200).send('Cadastrado');
  res.send('Olá');
});

app.use(middlewares.errorMiddlewares);
// o midd de erro deve vir no final para englobar todos os erros do código

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
