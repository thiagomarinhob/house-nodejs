const Tarefa = require('../models/Tarefa');
const Usuario = require('../models/Usuario');

module.exports = {

    async index(req,res){

        const { usuario_id } = req.params;

        const usuario1 = await Usuario.findByPk(usuario_id);

        if(!usuario1){
            return res.status(400).json({ error:  'Usuario não encontrado' });
        }

        const usuario = await Usuario.findByPk(usuario_id,{
            include: {
                association: 'tarefa',
                attributes: [ 'nome' ],
                through: {
                    attributes: []
                }
            }
        })
        
        return res.json(usuario.tarefa);
    },

    async store(req,res){
        const { usuario_id } = req.params;
        const { nome,status } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if(!usuario){
            return res.status(400).json({ error:  'Usuario não encontrado' });
        }

        const tarefa = await Tarefa.create({nome, status});

        usuario.addTarefa(tarefa);

        return res.json(tarefa);
    },

    async delete(req,res){
        const { usuario_id } = req.params;
        const { nome } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if(!usuario){
            return res.status(400).json({ error: 'Usuario não encontrado'});
        }

       const tarefa = await Tarefa.findOne({
           where: { nome }
       });

       await usuario.removeTarefa(tarefa);

        return res.json();
    },

    async update(req,res){
        const { usuario_id } = req.params;

        const { nome, status } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);

        if(!usuario){
            return res.status(400).json({ error: 'Usuario não encontrado'});
        }

        await Tarefa.update({
            nome: nome,
            status: status
        },{
            where: {  }
        })

        return res.json();

    }
}