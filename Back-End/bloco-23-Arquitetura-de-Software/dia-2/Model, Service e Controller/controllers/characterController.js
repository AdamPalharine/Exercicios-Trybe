const characterModel = require('../models/characterModels');

const ERROR_MESSAGE = 'Server error';

const getAll = async (req, res) => {
  try {
    const characters = await characterModel.getAll(); 
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
};

const create = async (req, res) => {
  const { name, cartoon } = req.body;
  try {
    const [rows] = await characterModel.create();
    const resultado = {
      id: rows.insertId,
      name,
      cartoon,
    };
    // console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
};

const getAllById = async (req, res) => {
  const { id } = req.params; 
  try {
    const rows = await characterModel.getById(id);
      console.log(rows);
      return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
};

module.exports = {
  getAll,
  create,
  getAllById
};