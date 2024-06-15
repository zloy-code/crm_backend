// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;
