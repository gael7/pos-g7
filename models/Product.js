'use strict';

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    productPrice: {
      type:DataTypes.DECIMAL(10,2),
      allowNull:false
    }
    });

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {as: "productCategory", foreignKey: 'categoryId'});
  };

  return Product;
};
