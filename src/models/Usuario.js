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
        this.hasMany(models.Telefone, {foreignKey: 'usuario_id', as: 'telefones'});
        this.belongsToMany(models.Tarefa, {foreignKey: 'usuario_id', through: 'usuario_tarefas', as: 'tarefa'});
        this.belongsToMany(models.Conta, {foreignKey: 'usuario_id', through: 'dividas', as: 'conta'});
    }
} 

module.exports = Usuario;