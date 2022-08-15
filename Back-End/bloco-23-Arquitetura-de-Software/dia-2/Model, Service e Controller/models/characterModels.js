const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nome_do_banco',
  password: 'password'
});

const getAll = async () => {
  const [characters] = await connection.execute('SELECT * FROM characters');
  return characters;
};

const create = async (name, cartoon) => {
  const [rows] = await connection.execute(
    'INSERT INTO nome_do_banco.nome_da_tabela (name, cartoon) VALUES (?, ?);',
    [name, cartoon]
    );
  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    'SELECT * FROM characters WHERE id = ?;',
    [id]);
  return rows;
};

const edit = async (name, cartoon, id) => {
  const [characters] = await connection.execute(
    'UPDATE onde_quero_editar SET name = ?, cartoon = ? WHERE id = ?;',
    [name, cartoon, id]
    );
  return characters;
};

const remove = async (id) => {
  const [characters] = await connection.execute(
    'DELETE FROM characters WHERE id=?;' [id]
    );
  return characters;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}