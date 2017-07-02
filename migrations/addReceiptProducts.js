'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ReceiptProducts', [
      {receiptId: 1, ProductId: 1, createdAt: new Date(), updatedAt: new Date()},
      {receiptId: 1, ProductId: 2, createdAt: new Date(), updatedAt: new Date()},
      {receiptId: 2, ProductId: 3, createdAt: new Date(), updatedAt: new Date()}]);
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
