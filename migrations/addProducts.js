'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {productName: 'Coke', productPrice: 22.5, categoryId: 1, createdAt: new Date(), updatedAt: new Date()},
      {productName: 'Lemonade', productPrice: 10.5, categoryId: 1, createdAt: new Date(), updatedAt: new Date()},
      {productName: 'Bacon and Eggs', productPrice: 70.5, categoryId: 2, createdAt: new Date(), updatedAt: new Date()}]);
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
