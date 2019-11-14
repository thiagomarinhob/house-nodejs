const Endereco = require('../models/Endereco');
const Usuario = require('../models/Usuario');

module.exports = {
    
    async index(req,res) {
        const { usuario_id } = req.params;
        
        const usuario = await Usuario.findByPk(usuario_id, {
            include: { association: 'enderecos' }
        });

        return res.json(usuario.enderecos);
    },

    async store(req,res) {
        const { usuario_id } = req.params;
        const { cidade, logradouro, complemento, bairro, numero } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if(!usuario){
            return res.status(400).json({ error:  'Usuario não encontrado' });
        }

        const endereco = await Endereco.create({
            usuario_id,
            cidade,
            logradouro,
            complemento,
            bairro,
            numero
        });

        return res.json(endereco);

    },

    async delete(req,res) {
        const { usuario_id } = req.params;

        await Endereco.destroy({
            where: { usuario_id }
        });

        return res.json();
    },

    async update(req,res) {
        const { usuario_id } = req.params;

        const { cidade, logradouro, complemento, bairro, numero } = req.body;

        await Endereco.update({
            cidade,
            logradouro,
            complemento,
            bairro,
            numero
        },{
            where: { usuario_id }
        })

        return res.json();
    }
}