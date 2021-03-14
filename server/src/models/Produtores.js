const { Model, DataTypes } = require("sequelize");

class Produtor extends Model {
  static init(sequelize) {
    super.init(
      {
        empresa: DataTypes.STRING,
        registro: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        pais: DataTypes.STRING,
        uf: DataTypes.STRING,
        cidade: DataTypes.STRING,
        endereco: DataTypes.STRING,
        atividade: DataTypes.STRING,
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
        consideracoes_registros: DataTypes.STRING,
        site: DataTypes.STRING,
        datas_contato: DataTypes.STRING,
        cultivares: DataTypes.STRING,
        metodo_cultivo: DataTypes.STRING,
        outro_metodo: DataTypes.STRING,
        area_fisica_total: DataTypes.STRING,
        area_hidroponica: DataTypes.STRING,
        vol_producao_total: DataTypes.STRING,
        localizacao: DataTypes.STRING,
        outro_cultivo_paralelo: DataTypes.STRING,
        migrou_para_hidroponia: DataTypes.STRING,
        profissao_anterior: DataTypes.STRING,
        movimentacao_financeira: DataTypes.STRING,
        data_hora: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "produtores",
      }
    );
  }
}

module.exports = Produtor;
