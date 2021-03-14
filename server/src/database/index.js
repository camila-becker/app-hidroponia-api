const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Contatos = require("../models/Contatos");
const Produtores = require("../models/Produtores");

const conexao = new Sequelize(dbConfig);

Contatos.init(conexao);
Produtores.init(conexao);

module.exports = conexao;
