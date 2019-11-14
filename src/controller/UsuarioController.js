const Usuario = require('../models/Usuario');

module.exports = {

    async index(req,res){
        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    },

    async store(req,res){
        const { nome, email, senha } = req.body;

        const usuario = await Usuario.create({ 
            nome,
            email,
            senha
         });

        return res.json(usuario);
    },

    async delete(req,res){
        const { id } = req.params;

        await Usuario.destroy({
            where: { id }
        })

        return res.json();
    },

    async update(req,res){
        const { id } = req.params;

        const { nome, email, senha } = req.body;

        await Usuario.update({
            nome: nome,
            email: email,
            senha: senha
        },{
            where: { id }
        })

        return res.json();

    }
}