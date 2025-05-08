const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class MateriaAluno  extends sequelize.Model{}

  MateriaAluno.init({
    ID:
      {
        type:sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
    IDMateria:
      {
        type:sequelize.UUID,
        allowNull:false,
        references:{
          model:"Materias",
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
      modelName:"MateriasAlunos",
      schema:shema
    }
)

module.exports = MateriaAluno;

