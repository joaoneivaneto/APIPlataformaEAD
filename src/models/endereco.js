const sequelize = require('sequelize');
const database = require('../db');
const shema=""

class Endereco extends  sequelize.Model{}

Endereco.init({
  ID:{
    type:sequelize.UUID,
    defaultValue:sequelize.UUIDV4,
    allowNull:false,
    primaryKey:true
  },
  CEP:{
    type:sequelize.STRING(10),
    allowNull:false
  },
  Estado:{
    type:sequelize.STRING(20),
    allowNull:false
  },
  Cidade:{
    type:sequelize.STRING(40),
    allowNull:false
  },
  Bairro:{
    type:sequelize.STRING(30),
    allowNull:false
  },
  Rua:{
    type:sequelize.STRING(40),
    allowNull:false
  },
  Numero:{
    type:sequelize.STRING(10),
    allowNull:false
  },
  Complemento:{
    type:sequelize.STRING(15),
    allowNull:false
  },
  PontoReferencia:{
    type:sequelize.STRING(40),
    allowNull:true
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
    modelName:"Enderecos",
    schema:shema
  })

module.exports = Endereco;
