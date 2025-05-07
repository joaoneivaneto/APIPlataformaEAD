const sequelize = require('sequelize');
const database = require('../db');
const shema=""

class Turma extends  sequelize.Model{}

Turma.init({
  ID:{
    type:sequelize.UUID,
    defaultValue:sequelize.UUIDV4,
    allowNull:false,
    primaryKey:true
  },
  Nome:{
    type:sequelize.STRING(20),
    allowNull:false
  },
  AnoInicio:{
    type:sequelize.DATE,
    allowNull:false
  },
  QuantidadeAlunos:{
    type:sequelize.INTEGER,
    allowNull:false
  },
  Periodo:{
    type:sequelize.STRING(10),
    allowNull:false
  }
},
  {
    sequelize:database,
    modelName:"Turmas",
    schema:shema
  })

module.exports = Turma;
