const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const initializeDatabase = require("./db/initialize");
const swaggerOptions = require("./docs/swaggerDef");
const productsRoutes = require("./routes/productsRoutes");
const { Product, Modification } = require("./db/associations");
const modificationRoutes = require("./routes/modificationRoutes");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/auth");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Initialize database
initializeDatabase();

// Serve static uploads directory
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

// Swagger setup
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log(swaggerSpec);

app.use("/products", productsRoutes);
app.use("/modifications", modificationRoutes);
app.use("/users", userRouter);
app.use("/auth", authRouter.router);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
