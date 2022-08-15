const characterModel = require('../models/characterModels');

const getAll = async () => {
  const characters = await characterModel.getAll();
  return characters;
};

const create = async (name, cartoon) => {
  const [rows] = await characterModel.create(name, cartoon);
  const resultado = {
    id: rows.insertId,
    name,
    cartoon,
  };
  return resultado;
};

const getById = async (id) => {
  const rows = await characterModel.getById(id);
  return rows;
};

const edit = async ({ id, name, cartoon }) => {
  await characterModel.edit({ id, name, cartoon });
  return true;
};

const remove = async (id) => {
  await characterModel.remove(id);
  return true;
};

module.exports = {
  getAll,
  create,
  getById,
  edit, 
  remove,
};
