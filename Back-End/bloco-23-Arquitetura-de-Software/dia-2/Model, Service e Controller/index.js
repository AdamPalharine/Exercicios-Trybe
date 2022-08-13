const express = require('express');

const characterRouter = require('./characterRouter');

const app = express.Router();

app.use('/characters', characterRouter); // só usar essa rota quando vir pelo /characters

app.listen(3001, () => console.log('Porta 3001 conectada'));
