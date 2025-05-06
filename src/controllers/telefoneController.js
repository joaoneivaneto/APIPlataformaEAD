const ModelTelefone = require('../models/telefone');

module.exports = {
  async List(req,res){
    try{
      const telefones = await ModelTelefone.findAll();
      if(!telefones.length){
        return res.status(404).json({message:"Nenhum telefone encontrado"});
      }
      return res.json(telefones);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const telefone = await ModelTelefone.create({
        ID:req.body.ID,
        Numero:req.body.Numero
      })
      return res.json(telefone);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const telefone = await ModelTelefone.findByPk(req.body.ID);
      if(telefone){
        telefone.ID = req.body.ID;
        telefone.Numero = req.body.Numero;
        await telefone.save();
        return res.json(telefone);
      }else {
        return res.status(404).json({message:"Nenhum telefone encontrado"});
      }
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async GetOne(req,res){
    try{
      const telefone  = await ModelTelefone.findByPk(req.body.ID);
      if(!telefone){
        return res.status(404).json({message:"Nenhum telefone encontrado"});
      }
      return res.json(telefone);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const telefone  = await ModelTelefone.findByPk(req.body.ID);
      if(!telefone){
        return res.status(404).json({message:"Nenhum telefone encontrado"});
      }
      await telefone.destroy();
      return res.json(telefone);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }
}
