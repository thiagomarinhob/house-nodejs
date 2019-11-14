const Conta = require('../models/Conta');

module.exports = {
    async index(req,res){
        const contas = await Conta.findAll();

        return res.json(contas);
    },

    async store(req,res){
        const { vencimento, tipo, status, valor } = req.body;

        const contas = await Conta.create({
            vencimento,
            tipo,
            status,
            valor
        });

        return res.json(contas);
    },

    async delete(req,res){
        const { id } = req.params;

        await Conta.destroy({
            where: { id }
        });

        return res.json();
    },

    async update(req,res){
        const { id } = req.params;
        const { vencimento, tipo, status, valor } = req.body;
        
        await Conta.update({
            vencimento: vencimento,
            tipo: tipo, 
            status: status,
            valor: valor
        },{
            where: { id }
        });

        return res.json();
    }
}