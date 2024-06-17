const port = process.env.PORT || 3000;

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
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "Product Name" },
        },
      },
      Modification: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          productId: { type: "integer", example: 1 },
          price_per_can: { type: "number", example: 10.99 },
          price_per_unit: { type: "number", example: 6000 },
          quantity: { type: "integer", example: 55 },
          quantity_per_can: { type: "integer", example: 12 },
          can_quantity: { type: "integer", example: 2 },
          liter: { type: "number", example: 0.5 },
        },
      },
    },
  },
};

module.exports = swaggerOptions;
