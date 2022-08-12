const express = require('express');

const mysql = require('mysql2/promise');
const { getAll, create, getById, edit, removeInfo } = require('./models/characterModels');
// substituir isso por: const characterModel = require('./models/characterModels');
// assim diminui o array enorme
// nesse caso, basta importar dessa forma: const characters = await characterModel.getAll();

const ERROR_MESSAGE = 'Server error';

const characterRouter = express.Router();

//construção da API
characterRouter.get('/characters', async (req, res) => {
  try {
    const characters = await getAll(); 
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});
  
characterRouter.post('/characters', async (req, res) => {
  const { name, cartoon } = req.body;
  try {
    const [rows] = await create();
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
});

// PEGAR INFORMAÇÕES PELO ID
characterRouter.get('/characters/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    const rows = await getById(id);
      console.log(rows);
      return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});

// PARA FAZER EDIÇÕES
characterRouter.put('/characters/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cartoon } = req.body
  try {
    const result = await edit({ id, name, cartoon });
    console.log(result);
    return res.status(200).json({ id: Number(id), name, cartoon});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});

// PARA DELETAR
characterRouter.delete('/characters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removeInfo(id);
    console.log(result);
    return res.status(200).json({ message: 'Informação Deletada'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});

module.exports = characterRouter;
