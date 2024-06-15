const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");
const Products = require("./products");

const Modification = sequelize.define(
  "Modification",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "id",
      },
    },
    price_per_can: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price_per_unit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity_per_can: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    can_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    liter: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: "modifications",
    timestamps: false,
  }
);

module.exports = Modification;
