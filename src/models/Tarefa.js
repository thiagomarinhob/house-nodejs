const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            status: DataTypes.STRING
        },{
            sequelize
        });
    }

    static associate(models){
        // chave que vai identificar // qual tabela vai relacionar// nome do campo na tabela
        this.belongsToMany(models.Usuario, {
            foreignKey: 'tarefa_id',
            through: 'usuario_tarefas', 
            as: 'usuario'
        })
    }
}

module.exports = Tarefa;