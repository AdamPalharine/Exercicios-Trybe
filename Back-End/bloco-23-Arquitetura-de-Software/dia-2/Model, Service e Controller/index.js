const express = require('express');

const routes = require('./routes');

const app = express.Router();

app.use('/characters', routes.characterRouter); 

app.listen(3001, () => console.log('Porta 3001 conectada'));
