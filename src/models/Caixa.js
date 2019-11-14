const { Model, DataTypes } = require('sequelize');

class Caixa extends Model {
    static init(sequelize) {
        super.init({
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            valor: DataTypes.DOUBLE
        },{
            sequelize,
            tableName: 'caixa'
        })
    }
}

module.exports = Caixa;