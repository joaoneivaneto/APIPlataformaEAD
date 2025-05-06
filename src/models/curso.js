const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class Curso  extends sequelize.Model{}

  Curso.init({
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
      },
    Preco:{
      type:sequelize.DECIMAL(5,2),
      allowNull:false,

    }
  },
    {
      sequelize:database,
      modelName:"Cursos",
      schema:shema
    }
)

module.exports = Curso;

