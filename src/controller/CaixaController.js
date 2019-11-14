const Caixa = require('../models/Caixa');

module.exports = {

    async store(req,res) {
        const { id, valor} = req.params;
        console.log('valor', valor);
        const caixa = await Caixa.create({
            id,
            valor
        });

        return res.json(caixa);
    }
    ,async index(req,res){
        const{ id } = req.params;
        const caixa = await Caixa.findByPk(id);

        return res.json(caixa);        
    },

    async update(req,res){
        const { id } = req.params;
        const { valor } = req.params;

        const valorAtual = await Caixa.findByPk(id);
        const caixaValor = parseInt(valorAtual.valor,10) + parseInt(valor,10);
        console.log('valorAtual', caixaValor);
        
        await Caixa.update({
            valor: caixaValor
        },{
            where: { id }
        });


        return res.json();
    },
    async delete(req,res){
        const { id } = req.params;

        await Caixa.destroy({
            where: {id}
        });

        return res.json();
    }
}