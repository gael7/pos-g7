'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Receipts', [
      {customerName: 'Gael', activeTab: true, totalToPay: 100, createdAt: new Date(), updatedAt: new Date()},
      {customerName: 'Luis', activeTab: false, totalToPay: 250, createdAt: new Date(), updatedAt: new Date()},
      {customerName: 'Miguel', totalToPay: 20, createdAt: new Date(), updatedAt: new Date()}]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
