'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('enderecos', {
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
         cidade: {
          type: Sequelize.STRING,
          allowNull: false,
         },
         logradouro: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         complemento: {
          type: Sequelize.STRING,
          allowNull: true,
         },
         bairro: {
          type: Sequelize.STRING,
          allowNull: false,
         },
         numero: {
          type: Sequelize.STRING,
          allowNull: false,
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
      return queryInterface.dropTable('enderecos');
    
  }
};
