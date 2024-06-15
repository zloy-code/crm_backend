const port = process.env.port || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Products API",
      version: "1.0.0",
      description: "API for managing products",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Adjust the path to match your actual route files
};

module.exports = swaggerOptions;
