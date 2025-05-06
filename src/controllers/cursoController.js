const ModelCurso = require('../models/curso');
module.exports ={
  async List(req,res){
    try{
      const cursos = await ModelCurso.findAll();
      if(cursos.length == 0){
        return res.status(404).json({message:"Nenhum curso encontrado"});
      }
      return res.json(cursos);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const cursos = await ModelCurso.create({
        ID:req.body.ID,
        Nome:req.body.Nome,
        Duracao:req.body.Duracao,
        Preco:req.body.Preco,
      });
      return res.json(cursos);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const prod  = await ModelCurso.findByPk(req.body.ID);
      if(prod){
        prod.Nome = req.body.Nome;
        prod.Duracao = req.body.Duracao;
        prod.Preco = req.body.Preco;
        await prod.save();
        return res.json(prod);
      }else{
          return res.status(404).json({message:"Nenhum curso encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const prod  = await ModelCurso.findByPk(req.body.ID);
      if(!prod){
        return res.status(404).json({message:"Nenhum curso encontrado"});
      }
      return res.json(prod);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const prod  = await ModelCurso.findByPk(req.body.ID);
      if(!prod){
        return res.status(404).json({message:"Nenhum curso encontrado"});
      }
      await prod.destroy();
      return res.json(prod);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
