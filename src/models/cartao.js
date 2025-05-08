const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class Cartao  extends sequelize.Model{}

  Cartao.init({
    ID:
      {
        type:sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
    NomeTitular:
      {
        type:sequelize.STRING(40),
        allowNull:false
      },
    NumeroCartao:
      {
        type:sequelize.STRING(20),
        allowNull:false
      },
    Validade:{
      type:sequelize.STRING(7),
      allowNull:false,

    },
    CVV:{
      type:sequelize.INTEGER,
      allowNull:false,
    },
    Bandeira:{
      type:sequelize.STRING(20),
      allowNull:false,
    },
    IDAluno:{
      type:sequelize.UUID,
      allowNull:false,
      references:{
        model:"Alunos",
        key:"ID",
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      }
    }
  },
    {
      sequelize:database,
      modelName:"Cartoes",
      schema:shema
    }
)

module.exports = Cartao;

