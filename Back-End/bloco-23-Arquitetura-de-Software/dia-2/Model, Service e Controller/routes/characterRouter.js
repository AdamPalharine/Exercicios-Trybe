const express = require('express');
const characterModel = require('../models/characterModels');
const characterController = require('../controllers/characterController')

const ERROR_MESSAGE = 'Server error';

const characterRouter = express.Router();

characterRouter.get('/', characterController.getAll);  
characterRouter.post('/', characterController.create);
// ou characterRouter.post('/', (req, res => characterController.create(req, res)));
characterRouter.get('/:id', characterController.getAllById);

// PARA FAZER EDIÇÕES
characterRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cartoon } = req.body
  try {
    const result = await characterModel.edit({ id, name, cartoon });
    console.log(result);
    return res.status(200).json({ id: Number(id), name, cartoon});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});

// PARA DELETAR
characterRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await characterModel.removeInfo(id);
    console.log(result);
    return res.status(200).json({ message: 'Informação Deletada'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE});
  }
});

module.exports = characterRouter;
