const { Model, DataTypes } = require('sequelize');

class Pagamento extends Model {
    static init(sequelize) {
        super.init({
            usuario_id: DataTypes.INTEGER,
            conta_id: DataTypes.INTEGER,
            data_pagamento: DataTypes.DATE
        },{
            sequelize
        })
    }

    

}

module.exports = Pagamento;