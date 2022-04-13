'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const data = [
      {
        /**gamer_id: ,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        /**room_id: ,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        result: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('historygames', data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('historygames', null, {});

  }
};
