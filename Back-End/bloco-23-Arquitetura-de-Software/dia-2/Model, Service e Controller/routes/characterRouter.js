const express = require('express');

const characterController = require('../controllers/characterController')

const characterRouter = express.Router();

characterRouter.get('/', characterController.getAll);  

characterRouter.post('/', characterController.create);
// ou characterRouter.post('/', (req, res => characterController.create(req, res)));

characterRouter.get('/:id', characterController.getById);

characterRouter.put('/:id', characterController.edit);

characterRouter.delete('/:id', characterController.remove);

module.exports = characterRouter;
