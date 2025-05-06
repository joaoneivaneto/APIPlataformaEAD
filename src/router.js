const express = require('express');

const controllerProduto = require('./controllers/cursoController');
const controllerAluno = require('./controllers/alunoController');
const controllerMaterias = require('./controllers/materiasController');


const router = express.Router();

//Alunos
router.get('/aluno/List',controllerAluno.List);
router.post('/aluno/Create', controllerAluno.Create);
router.patch('/aluno/Update', controllerAluno.Update);
router.get('/aluno/GetOne', controllerAluno.GetOne);
router.delete('/aluno/Delete', controllerAluno.Delete);

//Cursos
router.get('/curso/List',controllerProduto.List);
router.post('/curso/Create',controllerProduto.Create);
router.patch('/curso/Update',controllerProduto.Update);
router.get('/curso/GetOne',controllerProduto.GetOne);
router.delete('/curso/Delete',controllerProduto.Delete);

//Materia
router.get('/materias/List',controllerMaterias.List);
router.post('/materias/Create',controllerMaterias.Create);
router.patch('/materias/Update',controllerMaterias.Update);
router.get('/materias/GetOne',controllerMaterias.GetOne);
router.delete('/materias/Delete',controllerMaterias.Delete);

module.exports = router;
