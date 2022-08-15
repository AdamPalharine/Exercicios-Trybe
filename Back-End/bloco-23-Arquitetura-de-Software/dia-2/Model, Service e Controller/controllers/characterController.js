const characterService = require('../services/characterService');

const ERROR_MESSAGE = 'Server error';

const getAll = async (_req, res) => {
  try {
    const characters = await characterService.getAll(); 
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const create = async (req, res) => {
  const { name, cartoon } = req.body;
  try {
    const resultado = await characterService.create(name, cartoon);
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const getById = async (req, res) => {
  const { id } = req.params; 
  try {
    const rows = await characterService.getById(id);
      return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, cartoon } = req.body
  try {
    await characterService.edit({ id, name, cartoon });
    return res.status(200).json({ id: Number(id), name, cartoon});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await characterService.remove(id);
    return res.status(200).json({ message: 'Informação Deletada'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
};
