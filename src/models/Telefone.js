const { Model, DataTypes } = require('sequelize');

class Telefone extends Model {
    static init(sequelize){
        super.init({
            numero: DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'});
    } 
}


module.exports = Telefone;