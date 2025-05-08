const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class TelefoneAluno  extends sequelize.Model{}

  TelefoneAluno.init({
    ID:
      {
        type:sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
    IDTelefone:
      {
        type:sequelize.UUID,
        allowNull:false,
        references:{
          model:"Telefones",
          key:"ID",
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
        }
      },
    IDAluno:
      {
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
      modelName:"TelefoneAlunos",
      schema:shema
    }
)

module.exports = TelefoneAluno;

