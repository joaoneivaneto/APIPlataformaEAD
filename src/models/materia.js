const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class Materia  extends sequelize.Model{}

Materia.init({
    ID:
      {
        type:sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
    Nome:
      {
        type:sequelize.STRING(40),
        allowNull:false
      },
    Duracao:
      {
        type:sequelize.STRING(8),
        allowNull:false
      }
  },
  {
    sequelize:database,
    modelName:"Materias",
    schema:shema
  }
)

module.exports = Materia;

