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
        roomname: 'Room1',
        player1: '',
        player2: '',
        choice1: ['P', 'S', 'P'],
        choice2: ['P', 'S', 'S'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('roomgames', data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('roomgames', null, {});

  }
};
