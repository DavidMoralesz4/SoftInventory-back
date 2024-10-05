// docs/swagger.ts

import swaggerJSDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "API CRUD", version: "1.0.0" },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpect = swaggerJSDocs(options);
// const swaggerDocs