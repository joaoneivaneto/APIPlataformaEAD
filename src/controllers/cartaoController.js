const ModelCartao = require('../models/cartao');

module.exports ={
  async List(req,res){
    try{
      const cartoes = await ModelCartao.findAll();
      if(cartoes.length == 0){
        return res.status(404).json({message:"Nenhum cartão encontrado"});
      }
      return res.json(cartoes);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const cartao = await ModelCartao.create({
        NomeTitular:req.body.NomeTitular,
        NumeroCartao:req.body.NumeroCartao,
        Validade:req.body.Validade,
        Bandeira:req.body.Bandeira,
        CVV:req.body.CVV,
        IDAluno:req.body.IDAluno,
      });
      return res.json(cartao);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const cartao  = await ModelCartao.findByPk(req.body.ID);
      if(cartao){
          cartao.NomeTitular=req.body.NomeTitular,
          cartao.NumeroCartao=req.body.NumeroCartao,
          cartao.Validade=req.body.Validade,
          cartao.Bandeira=req.body.Bandeira,
          cartao.CVV=req.body.CVV,
          cartao.IDAluno=req.body.IDAluno,
          await cartao.save();
          return res.json(cartao);
      }else{
          return res.status(404).json({message:"Nenhum cartão encontrado"});
      }

    }catch(err){
      console.log("Erro  na Update"+err);
    }
  },
  async GetOne(req,res){
    try{
      const cartao  = await ModelCartao.findByPk(req.body.ID);
      if(!cartao){
        return res.status(404).json({message:"Nenhum cartao encontrado"});
      }
      return res.json(cartao);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const cartao  = await ModelCartao.findByPk(req.body.ID);
      if(!cartao){
        return res.status(404).json({message:"Nenhum cartão encontrado"});
      }
      await cartao.destroy();
      return res.json(cartao);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }


}
