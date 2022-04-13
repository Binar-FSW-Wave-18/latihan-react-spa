'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usergames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      bio_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'userbiodata',
            schema: 'public'
          },
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usergames');
  }
};