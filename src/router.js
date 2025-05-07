const express = require('express');

const controllerProduto = require('./controllers/cursoController');
const controllerAluno = require('./controllers/alunoController');
const controllerMaterias = require('./controllers/materiasController');
const controllerTelefone = require('./controllers/telefoneController');
const controllerTurma = require('./controllers/turmaController');
const controllerAlunoCursoTurma = require('./controllers/alunoCursoTurmaController');


const router = express.Router();

//Alunos
router.get('/aluno/List',controllerAluno.List);
router.post('/aluno/Create', controllerAluno.Create);
router.patch('/aluno/Update', controllerAluno.Update);
router.get('/aluno/GetOne', controllerAluno.GetOne);
router.delete('/aluno/Delete', controllerAluno.Delete);

//Cursos
router.get('/cursos/List',controllerProduto.List);
router.post('/curso/Create',controllerProduto.Create);
router.patch('/curso/Update',controllerProduto.Update);
router.get('/curso/GetOne',controllerProduto.GetOne);
router.delete('/curso/Delete',controllerProduto.Delete);

//Materia
router.get('/materias/List',controllerMaterias.List);
router.post('/materia/Create',controllerMaterias.Create);
router.patch('/materia/Update',controllerMaterias.Update);
router.get('/materia/GetOne',controllerMaterias.GetOne);
router.delete('/materia/Delete',controllerMaterias.Delete);

//telefone
router.get('/telefones/List',controllerTelefone.List);
router.post('/telefone/Create',controllerTelefone.Create);
router.patch('/telefone/Update',controllerTelefone.Update);
router.get('/telefone/GetOne',controllerTelefone.GetOne);
router.delete('/telefone/Delete',controllerTelefone.Delete);

// Turma
router.get('/turmas/List',controllerTurma.List);
router.post('/turma/Create',controllerTurma.Create);
router.patch('/turma/Update',controllerTurma.Update);
router.get('/turma/GetOne',controllerTurma.GetOne);
router.delete('/turma/Delete',controllerTurma.Delete);

//AlunoCursoTurma
router.get('/alunoCursoTurmas/List',controllerAlunoCursoTurma.List);
router.post('/alunoCursoTurma/Create',controllerAlunoCursoTurma.Create);
router.patch('/alunoCursoTurma/Update',controllerAlunoCursoTurma.Update);
router.get('/alunoCursoTurma/GetOne',controllerAlunoCursoTurma.GetOne);
router.delete('/alunoCursoTurma/Delete',controllerAlunoCursoTurma.Delete);

module.exports = router;
