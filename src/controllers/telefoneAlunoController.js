const ModelTelefoneAluno = require('../models/telefoneAluno');
module.exports ={
  async List(req,res){
    try{
      const telefoneAlunos = await ModelTelefoneAluno.findAll();
      if(telefoneAlunos.length == 0){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(telefoneAlunos);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const alunoTelefone = await ModelTelefoneAluno.create({
        IDAluno:req.body.IDAluno,
        IDTelefone:req.body.IDTelefone
      });
      return res.json(alunoTelefone);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const alunoTelefone  = await ModelTelefoneAluno.findByPk(req.body.ID);
      if(alunoTelefone){
        alunoTelefone.IDTelefone = req.body.IDTelefone;
        alunoTelefone.IDAluno= req.body.IDAluno;
        await alunoTelefone.save();
        return res.json(alunoTelefone);
      }else{
          return res.status(404).json({message:"Nenhum registro encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const alunoTelefone  = await ModelTelefoneAluno.findByPk(req.body.ID);
      if(!alunoTelefone){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(alunoTelefone);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const alunoTelefone  = await ModelTelefoneAluno.findByPk(req.body.ID);
      if(!alunoTelefone){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      await alunoTelefone.destroy();
      return res.json(alunoTelefone);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
