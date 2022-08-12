// 1° passo - importar o express
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.json());

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'descobrir-depois',
  password: 'password' // tem que ser a senha certa
}); 
// parametros de comparação (oq vai dentro das chaves) geralmente são Objetos
// isso deveria fazer a conecção com o MYSQL

//construção da API
app.get('/characters', (req, res) => {
  const result = connection.execute('SELECT * FROM characters') // dando quais informações eu quero da tabela
  res.status(200).json(result);
});

app.listen(3001, () => console.log('Porta 3001 conectada'));
