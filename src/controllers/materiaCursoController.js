const ModelMateriaCurso = require('../models/materiaCurso');
module.exports ={
  async List(req,res){
    try{
      const cursosMaterias = await ModelMateriaCurso.findAll();
      if(cursosMaterias.length == 0){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(cursosMaterias);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const cursoMateria = await ModelMateriaCurso.create({
        IDCurso:req.body.IDCurso,
        IDMateria:req.body.IDMateria
      });
      return res.json(cursoMateria);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const cursoMateria  = await ModelMateriaCurso.findByPk(req.body.ID);
      if(cursoMateria){
        cursoMateria.IDMateria = req.body.IDMateria;
        cursoMateria.IDCurso= req.body.IDCurso;
        await cursoMateria.save();
        return res.json(cursoMateria);
      }else{
          return res.status(404).json({message:"Nenhum registro encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const cursoMateria  = await ModelMateriaCurso.findByPk(req.body.ID);
      if(!cursoMateria){
        return res.status(404).json({message:"Nenhum Registro encontrado"});
      }
      return res.json(cursoMateria);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const cursoMateria  = await ModelMateriaCurso.findByPk(req.body.ID);
      if(!cursoMateria){
        return res.status(404).json({message:"Nenhum registro encontrado"});
      }
      await cursoMateria.destroy();
      return res.json(cursoMateria);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
