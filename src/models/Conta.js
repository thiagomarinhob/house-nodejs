const { Model, DataTypes } = require('sequelize');

class Conta extends Model {
    static init(sequelize) {
        super.init({
            vencimento: DataTypes.DATE,
            tipo: DataTypes.STRING,
            status: DataTypes.STRING,
            valor: DataTypes.DOUBLE
        }, {
            sequelize,
            tableName: 'contas'
        })
    }

    static associate(models) {
        // chave que vai identificar // qual tabela vai relacionar// nome do campo na tabela
        this.belongsToMany(models.Usuario, {
            foreignKey: 'conta_id',
            through: 'dividas',
            as: 'usuario'
        });
        //this.belongsToMany(models.Usuario, {foreignKey: 'conta_id', through: 'pagamentos', as: 'usuario'});
    }
}

module.exports = Conta;