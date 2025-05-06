const  sequelize  = require("sequelize");

const database = new sequelize('master','sa','Cruzeiro1!',{
  host: 'localhost',
  dialect: 'mssql',
  port:1433
});
database.sync();
module.exports = database;
