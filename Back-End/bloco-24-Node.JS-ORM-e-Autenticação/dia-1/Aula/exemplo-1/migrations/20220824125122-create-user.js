'use strict';
module.exports = {
  /**
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      passwordHash:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password_hash'
        // para não trocar a nomenclatura que estiver na tabela
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        // field não necessario pq pegará como padrão
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,   
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // prestar mais atenção na hora de nomear pra não dar erro depois na hora de exportar as seeds
        field: 'create_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};