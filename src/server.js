const express = require('express');
const api = express();
const routes = require('./router');
const cors = require('cors');

api.use(express.json());
api.use(routes);
api.use(cors({
  'Access-Control-Allow-Origin':'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
  'Access-Control-Allow-Credentials': true
  }))

api.listen(4300)





