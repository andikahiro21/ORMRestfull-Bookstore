"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Books", [
      {
        name: "Pertempuran Bayangan",
        description: "Dalam dunia yang dikuasai oleh organisasi rahasia yang gelap, seorang agen pemberani, Alex Storm, terlibat dalam misi berbahaya untuk mengungkap konspirasi global yang dapat mengguncang fondasi kekuasaan.",
        transactionID: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
