const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cidade: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            numero: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'});
    } 
}

module.exports = Endereco;