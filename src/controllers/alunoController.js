const ModelAluno = require('../models/aluno');

module.exports = {
  async List(req,res){
    try{
      const alunos = await ModelAluno.findAll();
      if(!alunos.length){
        return res.status(404).json({message:"Nenhum aluno encontrado"});
      }
      return res.json(alunos);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const alunos = await ModelAluno.create({
        ID:req.body.ID,
        Email:req.body.Email,
        Nome:req.body.Nome,
        Sobrenome:req.body.Sobrenome,
        Sexo:req.body.Sexo,
        CPF:req.body.CPF,
        DataNascimento:req.body.DataNascimento,
        Senha:req.body.Senha,
        AnoInicio:req.body.AnoInicio,
      })
      return res.json(alunos);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const aluno = await ModelAluno.findByPk(req.body.ID);
      if(aluno){
        aluno.Email = req.body.Email;
        aluno.Nome = req.body.Nome;
        aluno.Sobrenome = req.body.Sobrenome;
        aluno.Sexo = req.body.Sexo;
        aluno.CPF = req.body.CPF;
        aluno.DataNascimento = req.body.DataNascimento;
        aluno.Senha = req.body.Senha;
        aluno.AnoInicio = req.body.AnoInicio;
        await aluno.save();
        return res.json(aluno);
      }else {
        return res.status(404).json({message:"Nenhum aluno encontrado"});
      }
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async GetOne(req,res){
    try{
      const aluno  = await ModelAluno.findByPk(req.body.ID);
      if(!aluno){
        return res.status(404).json({message:"Nenhum aluno encontrado"});
      }
      return res.json(aluno);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const aluno  = await ModelAluno.findByPk(req.body.ID);
      if(!aluno){
        return res.status(404).json({message:"Nenhum aluno encontrado"});
      }
      await aluno.destroy();
      return res.json(aluno);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }
}
