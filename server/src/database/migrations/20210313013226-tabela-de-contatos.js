"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("contatos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      empresa: {
        type: Sequelize.STRING,
      },
      razao_social: {
        type: Sequelize.STRING,
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
      },
      pais: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      atividade: {
        type: Sequelize.STRING,
      },
      segmento: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      contato_1: {
        type: Sequelize.STRING,
      },
      celular_1: {
        type: Sequelize.STRING,
      },
      email_1: {
        type: Sequelize.STRING,
      },
      nome_1: {
        type: Sequelize.STRING,
      },
      cargo_1: {
        type: Sequelize.STRING,
      },
      contato_2: {
        type: Sequelize.STRING,
      },
      celular_2: {
        type: Sequelize.STRING,
      },
      email_2: {
        type: Sequelize.STRING,
      },
      nome_2: {
        type: Sequelize.STRING,
      },
      cargo_2: {
        type: Sequelize.STRING,
      },
      contato_3: {
        type: Sequelize.STRING,
      },
      celular_3: {
        type: Sequelize.STRING,
      },
      email_3: {
        type: Sequelize.STRING,
      },
      nome_3: {
        type: Sequelize.STRING,
      },
      cargo_3: {
        type: Sequelize.STRING,
      },
      contato_4: {
        type: Sequelize.STRING,
      },
      celular_4: {
        type: Sequelize.STRING,
      },
      email_4: {
        type: Sequelize.STRING,
      },
      nome_4: {
        type: Sequelize.STRING,
      },
      cargo_4: {
        type: Sequelize.STRING,
      },
      site: {
        type: Sequelize.STRING,
      },
      consideracoes_registros: {
        type: Sequelize.STRING,
      },
      datas_contato: {
        type: Sequelize.STRING,
      },
      data_hora: {
        type: Sequelize.DATE,
      },
      tipo_interacao: {
        type: Sequelize.STRING,
      },
      tipo_pessoa: {
        type: Sequelize.STRING,
      },
      data_nascimento: {
        type: Sequelize.STRING,
      },
      origem: {
        type: Sequelize.STRING,
      },
      responsavel: {
        type: Sequelize.STRING,
      },
      atuacao_mercado: {
        type: Sequelize.STRING,
      },
      instagram_1: {
        type: Sequelize.STRING,
      },
      instagram_2: {
        type: Sequelize.STRING,
      },
      instagram_3: {
        type: Sequelize.STRING,
      },
      instagram_4: {
        type: Sequelize.STRING,
      },
      interesse: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contatos");
  },
};
