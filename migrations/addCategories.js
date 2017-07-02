'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {categoryName: 'Drinks', createdAt: new Date(), updatedAt: new Date()},
      {categoryName: 'Breakfast', createdAt: new Date(), updatedAt: new Date()},
      {categoryName: 'Lunch', createdAt: new Date(), updatedAt: new Date()}]);
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
