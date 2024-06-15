const sequelize = require("./connection");
const Products = require("../models/products");
const Modification = require("../models/modification");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully!!!");

    await sequelize.sync({ alter: true });
    console.log("Database models synced successfully!!!");
  } catch (error) {
    console.error("Unable to connect to the database!!!", error);
  }
}

module.exports = initializeDatabase;
