// docs/swagger.ts

import { Request, Response } from "express";
import swaggerJSDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
// import { server } from "../server";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "API CRUD", version: "1.0.0" },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpect = swaggerJSDocs(options);
// const swaggerDocs

export const swaggerDocs = (server: any, port: any) => {
  server.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpect));
  server.get("/api/v1/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpect);
  });

  console.log(`Version 1 Docs available at http://localhost:${port}/api/v1/docs`);
};
