const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const initializeDatabase = require("./db/initialize");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

initializeDatabase();

app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));
