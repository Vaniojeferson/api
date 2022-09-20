
const User = require('../models/Pagementos');


module.exports = {
    async index(req, res){
        //const { id } = req.params;
        const lista = await User.findAll();

        return res.send(lista);

    },

    
    async store(req, res){
        
        const { idprodutos, valortotal, valorcomdesconto, valordodesconto} = req.body;

        const lista = await User.create({ idprodutos, valortotal, valorcomdesconto, valordodesconto });

        return res.json(lista);
    },

    

};

