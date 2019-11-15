const Telefone = require('../models/Telefone');
const Usuario = require('../models/Usuario');

module.exports = {

    async index(req,res) {
        const { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id,{
            include: { association: 'telefones'}
        });

        return res.json(usuario.telefones);

    },

    async store(req,res) {

        const { usuario_id } = req.params;
        const { numero } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if(!usuario){
            return res.status(400).json({ error:  'Usuario não encontrado' });
        }

        const telefone = await Telefone.create({
            numero: numero,
            usuario_id: usuario_id
        });

        return res.json(telefone);
    },

    async delete(req,res) {

        const { usuario_id } = req.params;

        await Telefone.destroy({
            where: { usuario_id }
        });

        return res.json();

    },

    async update(req,res) {
        const { usuario_id } = req.params;
        const { numero } = req.body;

        await Telefone.update({
            numero
        },{
            where: { usuario_id}
        });

        return res.json();
        
    }
}