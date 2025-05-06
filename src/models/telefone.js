const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class Telefone  extends sequelize.Model{}

Telefone.init({
    ID:
      {
        type:sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
    Numero:
      {
        type:sequelize.STRING(20),
        allowNull:false
      }
  },
  {
    sequelize:database,
    modelName:"Telefones",
    schema:shema
  }
)

module.exports = Telefone;

