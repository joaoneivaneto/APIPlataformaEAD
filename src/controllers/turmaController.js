const ModelTurma = require('../models/turma');

module.exports = {
  async List(req,res){
    try{
      const turmas = await ModelTurma.findAll();
      if(!turmas.length){
        return res.status(404).json({message:"Nenhuma turma encontrado"});
      }
      return res.json(turmas);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const turma = await ModelTurma.create({
        Nome:req.body.Nome,
        AnoInicio:req.body.AnoInicio,
        QuantidadeAlunos:req.body.QuantidadeAlunos,
        Periodo:req.body.Periodo,
      })
      return res.json(turma);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const turma = await ModelTurma.findByPk(req.body.ID);
      if(turma){
        turma.ID = req.body.ID;
        turma.Nome = req.body.Nome;
        turma.AnoInicio = req.body.AnoInicio;
        turma.QuantidadeAlunos = req.body.QuantidadeAlunos;
        turma.Periodo = req.body.Periodo;
        await turma.save();
        return res.json(turma);
      }else {
        return res.status(404).json({message:"Nenhuma turma encontrado"});
      }
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async GetOne(req,res){
    try{
      const turma  = await ModelTurma.findByPk(req.body.ID);
      if(!turma){
        return res.status(404).json({message:"Nenhuma turma encontrado"});
      }
      return res.json(turma);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const turma  = await ModelTurma.findByPk(req.body.ID);
      if(!turma){
        return res.status(404).json({message:"Nenhuma turma encontrado"});
      }
      await turma.destroy();
      return res.json(turma);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }
}
