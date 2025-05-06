const ModelMateria = require('../models/materia');

module.exports = {
  async List(req,res){
    try{
      const materias = await ModelMateria.findAll();
      if(!materias.length){
        return res.status(404).json({message:"Nenhuma matéria encontrado"});
      }
      return res.json(materias);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const materia = await ModelMateria.create({
        ID:req.body.ID,
        Nome:req.body.Nome,
        Duracao:req.body.Duracao,
      })
      return res.json(materia);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const materia = await ModelMateria.findByPk(req.body.ID);
      if(materia){
        materia.ID = req.body.ID;
        materia.Nome = req.body.Nome;
        materia.Duracao = req.body.Duracao;
        await materia.save();
        return res.json(materia);
      }else {
        return res.status(404).json({message:"Nenhuma matéria encontrado"});
      }
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async GetOne(req,res){
    try{
      const materia  = await ModelMateria.findByPk(req.body.ID);
      if(!materia){
        return res.status(404).json({message:"Nenhuma matéria encontrado"});
      }
      return res.json(materia);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const materia  = await ModelMateria.findByPk(req.body.ID);
      if(!materia){
        return res.status(404).json({message:"Nenhuma matéria encontrado"});
      }
      await materia.destroy();
      return res.json(materia);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }
}
