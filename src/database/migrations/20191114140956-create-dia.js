'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tarefa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tarefas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dia_semana: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dias');

  }
};
