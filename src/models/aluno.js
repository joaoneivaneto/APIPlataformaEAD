const sequelize = require('sequelize');
const database = require('../db');
const shema=""

class Aluno extends  sequelize.Model{}

Aluno.init({
  ID:{
    type:sequelize.UUID,
    defaultValue:sequelize.UUIDV4,
    allowNull:false,
    primaryKey:true
  },
  Email:{
    type:sequelize.STRING(40),
    allowNull:false
  },
  Nome:{
    type:sequelize.STRING(15),
    allowNull:false
  },
  Sobrenome:{
    type:sequelize.STRING(40),
    allowNull:false
  },
  Sexo:{
    type:sequelize.STRING(10),
    allowNull:false
  },
  CPF:{
    type:sequelize.STRING(14),
    allowNull:false
  },
  DataNascimento:{
    type:sequelize.STRING(12),
    allowNull:false
  },
  Senha:{
    type:sequelize.STRING(20),
    allowNull:false
  },
  AnoInicio:{
    type:sequelize.DATE,
    allowNull:false
  }

},
  {
    sequelize:database,
    modelName:"Alunos",
    schema:shema
  })

module.exports = Aluno;
