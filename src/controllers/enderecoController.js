const ModelEndereco = require('../models/endereco');

module.exports = {
  async List(req,res){
    try{
      const enderecos = await ModelEndereco.findAll();
      if(!enderecos.length){
        return res.status(404).json({message:"Nenhum endereço encontrado"});
      }
      return res.json(enderecos);
    }catch(err){
      console.log("Erro  na list"+err);
    }
  },
  async Create(req,res){
    try{
      const endereco = await ModelEndereco.create({
        CEP:req.body.CEP,
        Estado:req.body.Estado,
        Cidade:req.body.Cidade,
        Bairro:req.body.Bairro,
        Rua:req.body.Rua,
        Numero:req.body.Numero,
        Complemento:req.body.Complemento,
        PontoReferencia:req.body.PontoReferencia,
        IDAluno:req.body.IDAluno,
      })
      return res.json(endereco);
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async Update(req,res){
    try{
      const endereco = await ModelEndereco.findByPk(req.body.ID);
      if(endereco){
        endereco.CPF = req.body.CEP;
        endereco.Estado = req.body.Estado;
        endereco.Cidade = req.body.Cidade;
        endereco.Bairro = req.body.Bairro;
        endereco.Rua = req.body.Rua;
        endereco.Numero = req.body.Numero;
        endereco.Complemento = req.body.Complemento;
        endereco.PontoReferencia = req.body.PontoReferencia;
        endereco.IDAluno = req.body.IDAluno;
        await endereco.save();
        return res.json(endereco);
      }else {
        return res.status(404).json({message:"Nenhum endereço encontrado"});
      }
    }catch(err){
      console.log("Erro  na create"+err);
    }
  },
  async GetOne(req,res){
    try{
      const endereco  = await ModelEndereco.findByPk(req.body.ID);
      if(!endereco){
        return res.status(404).json({message:"Nenhum endereço encontrado"});
      }
      return res.json(endereco);
    }catch(err){
      console.log("Erro  na GetOne"+err);
    }
  },
  async Delete(req,res){
    try{
      const endereco  = await ModelEndereco.findByPk(req.body.ID);
      if(!endereco){
        return res.status(404).json({message:"Nenhum endereço encontrado"});
      }
      await endereco.destroy();
      return res.json(endereco);
    }catch(err){
      console.log("Erro  na Delete"+err);
    }
  }
}
