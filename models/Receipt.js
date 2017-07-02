'use strict';

module.exports = function(sequelize, DataTypes) {
  const Receipt = sequelize.define('Receipt', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customerName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    activeTab: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    deliver: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    },
    totalToPay: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
    });

  Receipt.associate = function(models) {
    Receipt.belongsToMany(models.Product, {as: "ProductsSold", through: "ReceiptProducts", foreignKey: "receiptId"});
  };

  return Receipt;
};
