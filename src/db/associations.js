// db/associations.js
const Product = require("../models/products");
const Modification = require("../models/modification");

Product.hasMany(Modification, { foreignKey: "productId", as: "modifications" });
Modification.belongsTo(Product, { foreignKey: "productId", as: "product" });

module.exports = { Product, Modification };
