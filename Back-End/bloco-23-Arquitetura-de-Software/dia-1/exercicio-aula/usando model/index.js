// 1° passo - importar o express
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.json());

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nome_do_banco',
  password: 'password' // tem que ser a senha certa
}); 
// parametros de comparação (oq vai dentro das chaves) geralmente são Objetos
// isso deveria fazer a conecção com o MYSQL
// createPoll é um tipo de coneção co o MySql e exevutar as QUERY

//construção da API
app.get('/characters', async (req, res) => {
  // lembrar que o try e o catch são informações para o caso de nossa aplicação venha a dar algum tipo de erro
  try {
    const [characters] = await connection.execute('SELECT * FROM characters'); // dando quais informações eu quero da tabela
    // desestruturando para pegar os arrays
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error); // pode ajudar a encontrar qual erro está dando na aplicação
    return res.status(500).json({ message: 'Server error'});
  }
});
  
app.post('/characters', async (req, res) => {
  try {
    const { name, cartoon } = req.body;
    const [rows] = await connection.execute(
      'INSERT INTO nome_do_banco.nome_da_tabela (name, cartoon) VALUES (?, ?);',
      [name, cartoon]
      );
    // const para inserir dados em um banco
    // ? > valores referentes as interrogações vão fora da string
    // a ordem nas chaves importa, é uma interrogação por parametro
    const resultado = {
      // dados do personagem/objeto
      // traz um objeto com as informações importantes
      id: rows.insertId,
      name,
      cartoon,
    };
    // console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error'});
  }
});

// PEGAR INFORMAÇÕES PELO ID
app.get('/characters/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    // ou const id = req.params.id; 
    // ou (eu acho pelo menos) const { id } = req.query;
    // params = /characters/:id obrigada a colocar o dado 
    // query = /character/? o dado é opcional
    const [rows] = await connection.execute(
      'SELECT * FROM characters WHERE id = ?;',
      [id] // array de BINDs? ou algo assim
      );
      console.log(rows); // deverá vir apenas os dados com o id informado
      return res.status(200).json(rows);
    // res.status(200).json(rows[0]); para vir apenas a primeira informação do array 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error'});
  }
});

// PARA FAZER EDIÇÕES
app.put('/characters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cartoon } = req.body
    const [result] = await connection.execute(
      'UPDATE onde_quero_editar SET name = ?, cartoon = ? WHERE id = ?;',
      [name, cartoon, id]
      );
      // tentar nunca esquecer o WHERE para não apagar o banco de dados inteiro
    console.log(result);
    return res.status(200).json({ id: Number(id), name, cartoon});
    // id: Number(id) para ao inves de retornar uma string, retorna um number
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error'});
  }
});

// PARA DELETAR
app.delete('/characters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connection.execute(
      'DELETE FROM characters WHERE id=?;' [id]
      // tentar nunca esquecer o WHERE para não apagar o banco de dados inteiro
    );
    console.log(result);
    return res.status(200).json({ message: 'Informação Deletada'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error'});
  }
});

app.listen(3001, () => console.log('Porta 3001 conectada'));
