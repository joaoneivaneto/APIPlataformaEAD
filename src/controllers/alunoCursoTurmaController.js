const ModelAlunoCursoTurma = require('../models/alunoCursoTurma');
module.exports ={
  async List(req,res){
    try{
      const alunosCursosTurmas = await ModelAlunoCursoTurma.findAll();
      if(alunosCursosTurmas.length == 0){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      return res.json(alunosCursosTurmas);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const alunoCursoTurma = await ModelAlunoCursoTurma.create({
        IDTurma:req.body.IDTurma,
        IDCurso:req.body.IDCurso,
        IDAluno:req.body.IDAluno,
        Status:req.body.Status,
      });
      return res.json(alunoCursoTurma);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const alunoCursoTurma  = await ModelAlunoCursoTurma.findByPk(req.body.ID);
      if(alunoCursoTurma){
        alunoCursoTurma.IDAluno = req.body.IDAluno;
        alunoCursoTurma.IDCurso = req.body.IDCurso;
        alunoCursoTurma.IDTurma = req.body.IDTurma;
        alunoCursoTurma.Status = req.body.Status;
        await alunoCursoTurma.save();
        return res.json(alunoCursoTurma);
      }else{
          return res.status(404).json({message:"Nenhum registro encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const alunoCursoTurma  = await ModelAlunoCursoTurma.findByPk(req.body.ID);
      if(!alunoCursoTurma){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      return res.json(alunoCursoTurma);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const alunoCursoTurma  = await ModelAlunoCursoTurma.findByPk(req.body.ID);
      if(!alunoCursoTurma){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      await alunoCursoTurma.destroy();
      return res.json(alunoCursoTurma);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
