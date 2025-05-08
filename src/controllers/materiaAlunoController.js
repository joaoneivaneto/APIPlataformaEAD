const ModelMateriaAluno = require('../models/materiaAluno');
module.exports ={
  async List(req,res){
    try{
      const materiaAlunos = await ModelMateriaAluno.findAll();
      if(materiaAlunos.length == 0){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(materiaAlunos);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const alunoMateria = await ModelMateriaAluno.create({
        IDAluno:req.body.IDAluno,
        IDMateria:req.body.IDMateria
      });
      return res.json(alunoMateria);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const alunoMateria  = await ModelMateriaAluno.findByPk(req.body.ID);
      if(alunoMateria){
        alunoMateria.IDMateria = req.body.IDMateria;
        alunoMateria.IDAluno= req.body.IDAluno;
        await alunoMateria.save();
        return res.json(alunoMateria);
      }else{
          return res.status(404).json({message:"Nenhum registro encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const alunoMateria  = await ModelMateriaAluno.findByPk(req.body.ID);
      if(!alunoMateria){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(alunoMateria);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const alunoMateria  = await ModelMateriaAluno.findByPk(req.body.ID);
      if(!alunoMateria){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      await alunoMateria.destroy();
      return res.json(alunoMateria);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
