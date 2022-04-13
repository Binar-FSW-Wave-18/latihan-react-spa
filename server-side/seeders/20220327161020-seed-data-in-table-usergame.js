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
        username: 'Enggar',
        password: '123654',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Hafizh',
        password: '123qwe',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Baim',
        password: 'cucunegara',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ian',
        password: 'qwerty',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Azhim',
        password: '123qwe123',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Aji',
        password: '123qwe123qwe',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Dika',
        password: '123qwe2',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ray',
        password: '123qwe3',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Rigan',
        password: '123qwe4',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Eric',
        password: '123qwe5',
        role: 'PlayerUser',
        /**bio_id: 1,FOLLOW UP KE MAS FEBRI HOW TO CREATE IN SEEDERS*/
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]

    await queryInterface.bulkInsert('usergames', data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('usergames', null, {});

  }
};


