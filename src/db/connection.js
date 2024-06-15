const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host:
    process.env.DB_HOST ||
    "dpg-cpmics6ehbks73fpht50-a.oregon-postgres.render.com",
  username: process.env.DB_USERNAME || "crm_drinks_1phx_user",
  password: process.env.DB_PASSWORD || "Y0TMOYqytrwz2qUJQrKn3DAbQJTPOo09",
  database: process.env.DB_NAME || "crm_drinks_1phx",
  port: process.env.DB_PORT || 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = sequelize;
