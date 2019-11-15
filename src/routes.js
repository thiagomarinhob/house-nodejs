const express = require('express');
const UsuarioController = require('./controller/UsuarioController');
const EnderecoController = require('./controller/EnderecoController');
const CaixaController = require('./controller/CaixaController');
const TarefaController = require('./controller/TarefaController');
const ContaController = require('./controller/ContaController');
const TelefoneController = require('./controller/TelefoneController');

const routes = express.Router();

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.put('/usuarios/:id', UsuarioController.update);

routes.post('/usuarios/:usuario_id/enderecos', EnderecoController.store);
routes.get('/usuarios/:usuario_id/enderecos', EnderecoController.index);
routes.delete('/usuarios/:usuario_id/enderecos', EnderecoController.delete);
routes.put('/usuarios/:usuario_id/enderecos', EnderecoController.update);

routes.post('/caixa/:id/:valor', CaixaController.store);
routes.get('/caixa/:id', CaixaController.index);
routes.delete('/caixa/:id', CaixaController.delete);
routes.put('/caixa/:id/:valor', CaixaController.update);

routes.post('/usuarios/:usuario_id/tarefas', TarefaController.store);
routes.get('/usuarios/:usuario_id/tarefas', TarefaController.index);
routes.delete('/usuarios/:usuario_id/tarefas', TarefaController.delete);
routes.put('/usuarios/:usuario_id/tarefas', TarefaController.update);

routes.post('/contas', ContaController.store);
routes.get('/contas', ContaController.index);
routes.delete('/contas/:id', ContaController.delete);
routes.put('/contas/:id', ContaController.update);

routes.post('/usuarios/:usuario_id/telefones', TelefoneController.store);
routes.get('/usuarios/:usuario_id/telefones', TelefoneController.index);
routes.delete('/usuario/:usuario_id/telefones', TelefoneController.delete);
routea.put('/usuario/:usuario_id/telefones', TelefoneController.update);


module.exports = routes;