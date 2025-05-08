const sequelize = require("sequelize");
const database = require("../db");
const shema = ""

class MateriaCurso  extends sequelize.Model{}

  MateriaCurso.init({
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
    IDCurso:
      {
        type:sequelize.UUID,
        allowNull:false,
        references:{
          model:"Cursos",
          key:"ID",
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
        }
      }
  },
    {
      sequelize:database,
      modelName:"MateriasCursos",
      schema:shema
    }
)

module.exports = MateriaCurso;

