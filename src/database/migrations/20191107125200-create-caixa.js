'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('caixa', {
         id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
         },
         valor: {
           type: Sequelize.DOUBLE,
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
      return queryInterface.dropTable('caixa');
    
  }
};
