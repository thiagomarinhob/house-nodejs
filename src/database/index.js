const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Caixa = require('../models/Caixa');
const Tarefa = require('../models/Tarefa');
const Conta = require('../models/Conta');

Caixa.init(connection);
Usuario.init(connection);
Endereco.init(connection);
Tarefa.init(connection);
Conta.init(connection);

Usuario.associate(connection.models);
Endereco.associate(connection.models);
Tarefa.associate(connection.models);
 


module.exports = connection;