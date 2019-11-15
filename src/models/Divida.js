const { Model, DataTypes } = require('sequelize');

class Divida extends Model {
    static init(sequelize) {
        super.init({
            valor: DataTypes.DOUBLE,
            data_pagamento: DataTypes.DATE
        }, {
            sequelize,
        })
    }
}

module.exports = Divida;