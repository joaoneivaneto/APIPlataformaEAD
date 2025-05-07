const sequelize = require('sequelize');
const database = require('../db');
const shema=""
const aluno = require('./aluno');
const turma = require('./turma');
const curso = require('./curso');

class alunoCursoTurma extends  sequelize.Model{}

alunoCursoTurma.init({
  ID:{
    type:sequelize.UUID,
    defaultValue:sequelize.UUIDV4,
    allowNull:false,
    primaryKey:true
  },
  IDAluno:{
    type:sequelize.UUID,
    allowNull:false,
    references:{
      model:aluno,
      key:"ID",
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
  },
  IDTurma: {
    type: sequelize.UUID,
    allowNull: false,
    references: {
      model: turma,
      key: "ID",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    }
  },
  IDCurso:{
    type:sequelize.UUID,
    allowNull:false,
    references:{
      model:curso,
      key:"ID",
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
  },
  Status:{
    type:sequelize.STRING(20),
    allowNull:false,
    defaultValue:"Matriculado"
  }


},

  {
    sequelize:database,
    modelName:"AlunosCursosTurmas",
    schema:shema
  })

module.exports = alunoCursoTurma;
