const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/users', UserController.store); //Criar usuario
routes.get('/users/', UserController.index); //index(mostrar uma lista)
routes.get('/users/:id', UserController.show); //show(mostrar um unico)
routes.put('/users/:id', UserController.update); //update(alterar)
routes.delete('/users/:id', UserController.destroy); //destroy(deletar)

module.exports = routes;

