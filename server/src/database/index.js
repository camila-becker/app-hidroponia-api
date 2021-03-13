const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Contatos = require("../models/Contatos");

const conexao = new Sequelize(dbConfig);

Contatos.init(conexao);

module.exports = conexao;
