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
        full_name: 'Enggar Lhokeswara',
        email_address: 'enggar@email.com',
        city: 'Jakarta',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Hafizh Khairuddin',
        email_address: 'hafizh@email.com',
        city: 'Jakarta',
        age: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Ibrahim Rachmadani',
        email_address: 'baim@email.com',
        city: 'Surabaya',
        age: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Ihdhar Nur Hadyan',
        email_address: 'ian@email.com',
        city: 'Yogyakarta',
        age: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Muhammad Azhim',
        email_address: 'azhim@email.com',
        city: 'Paiton',
        age: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Nugraha Banuajie',
        email_address: 'aji@email.com',
        city: 'Bekasi',
        age: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Nur Ardika',
        email_address: 'dika@email.com',
        city: 'Banyuwangi',
        age: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Raynaldi Hadi',
        email_address: 'ray@email.com',
        city: 'Bekasi',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Muhammad Rigan',
        email_address: 'rigan@email.com',
        city: 'Jakarta',
        age: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Ezra Ricardo',
        email_address: 'eric@email.com',
        city: 'Jakarta',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]

     await queryInterface.bulkInsert('userbiodata', data, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('userbiodata', null, {});

  }
};
