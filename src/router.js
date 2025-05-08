const express = require('express');

const controllerProduto = require('./controllers/cursoController');
const controllerAluno = require('./controllers/alunoController');
const controllerMaterias = require('./controllers/materiasController');
const controllerTelefone = require('./controllers/telefoneController');
const controllerTurma = require('./controllers/turmaController');
const controllerAlunoCursoTurma = require('./controllers/alunoCursoTurmaController');
const controllerCartao = require('./controllers/cartaoController');
const ControllerEndereco = require('./controllers/enderecoController');
const controllerMateriaCurso = require('./controllers/materiaCursoController');
const controllerAlunoMateria = require('./controllers/materiaAlunoController');
const controllerAlunoTelefone = require('./controllers/telefoneAlunoController');


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

//Cartao
router.get('/cartoes/List',controllerCartao.List);
router.post('/cartao/Create',controllerCartao.Create);
router.patch('/cartao/Update',controllerCartao.Update);
router.get('/cartao/GetOne',controllerCartao.GetOne);
router.delete('/cartao/Delete',controllerCartao.Delete);

//Endereco
router.get('/enderecos/List',ControllerEndereco.List);
router.post('/endereco/Create',ControllerEndereco.Create);
router.patch('/endereco/Update',ControllerEndereco.Update);
router.get('/endereco/GetOne',ControllerEndereco.GetOne);
router.delete('/endereco/Delete',ControllerEndereco.Delete);

//MateriaCurso
router.get('/materiaCursos/List',controllerMateriaCurso.List);
router.post('/materiaCurso/Create',controllerMateriaCurso.Create);
router.patch('/materiaCurso/Update',controllerMateriaCurso.Update);
router.get('/materiaCurso/GetOne',controllerMateriaCurso.GetOne);
router.delete('/materiaCurso/Delete',controllerMateriaCurso.Delete);

//AlunoMateria
router.get('/alunoMaterias/List',controllerAlunoMateria.List);
router.post('/alunoMateria/Create',controllerAlunoMateria.Create);
router.patch('/alunoMateria/Update',controllerAlunoMateria.Update);
router.get('/alunoMateria/GetOne',controllerAlunoMateria.GetOne);
router.delete('/alunoMateria/Delete',controllerAlunoMateria.Delete);

//AlunoTelefone
router.get('/alunoTelefones/List',controllerAlunoTelefone.List);
router.post('/alunoTelefone/Create',controllerAlunoTelefone.Create);
router.patch('/alunoTelefone/Update',controllerAlunoTelefone.Update);
router.get('/alunoTelefone/GetOne',controllerAlunoTelefone.GetOne);
router.delete('/alunoTelefone/Delete',controllerAlunoTelefone.Delete);

module.exports = router;
