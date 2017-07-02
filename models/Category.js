'use strict';

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryName: {
      type:DataTypes.STRING,
      allowNull:false
    },
  });

  return Category;
};
