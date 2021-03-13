const { Model, DataTypes } = require("sequelize");

class Contato extends Model {
  static init(sequelize) {
    super.init(
      {
        empresa: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        cpf_cnpj: DataTypes.STRING,
        pais: DataTypes.STRING,
        uf: DataTypes.STRING,
        cidade: DataTypes.STRING,
        endereco: DataTypes.STRING,
        atividade: DataTypes.STRIG,
        segmento: DataTypes.STRING,
        status: DataTypes.STRING,
        contato_1: DataTypes.STRING,
        celular_1: DataTypes.STRING,
        email_1: DataTypes.STRING,
        nome_1: DataTypes.STRING,
        cargo_1: DataTypes.STRING,
        contato_2: DataTypes.STRING,
        celular_2: DataTypes.STRING,
        email_2: DataTypes.STRING,
        nome_2: DataTypes.STRING,
        cargo_2: DataTypes.STRING,
        contato_3: DataTypes.STRING,
        celular_3: DataTypes.STRING,
        email_3: DataTypes.STRING,
        nome_3: DataTypes.STRING,
        cargo_3: DataTypes.STRING,
        contato_4: DataTypes.STRING,
        celular_4: DataTypes.STRING,
        email_4: DataTypes.STRING,
        nome_4: DataTypes.STRING,
        cargo_4: DataTypes.STRING,
        site: DataTypes.STRING,
        consideracoes_registros: DataTypes.STRING,
        datas_contato: DataTypes.STRING,
        data_hora: DataTypes.DATE,
        tipo_interacao: DataTypes.STRING,
        tipo_pessoa: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
        origem: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        atuacao_mercado: DataTypes.STRING,
        instagram_1: DataTypes.STRING,
        instagram_2: DataTypes.STRING,
        instagram_3: DataTypes.STRING,
        instagram_4: DataTypes.STRING,
        interesse: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "contatos",
      }
    );
  }
}

module.exports = Contato;
