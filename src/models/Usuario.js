const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Endereco, {foreignKey: 'usuario_id', as: 'enderecos'});
        this.belongsToMany(models.Tarefa, {foreignKey: 'usuario_id', through: 'usuario_tarefas', as: 'tarefa'});
        this.belongsToMany(models.Contas, {foreignKey: 'usuario_id', through: 'dividas', as: 'conta'});
        this.belongsToMany(models.Contas, {foreignKey: 'usuario_id', through: 'pagamentos', as: 'conta'});
    }
} 

module.exports = Usuario;