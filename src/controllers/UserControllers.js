const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { id } = req.params;
        const lista = await User.findByPk(id);

        return res.json(lista);

    },


    async store(req, res){
        const { descrição, código, valor} = {descrição: 'ggjas', código: 'yhksh', valor:'123'};

        const lista = await User.create({ descrição, código, valor });

        return res.json(lista);
    },

    

};