import express from "express";
import morgan from "morgan";
import { clientsRoute } from "./routes/clientsRouter";
import { orderRouter } from "./routes/orderRouter";
import { productsRouter } from "./routes/productsRouter";

export const server = express();

server.use(morgan("dev"));

server.use(express.json());

server.use("/api", clientsRoute);
server.use("/api", orderRouter)
server.use("/api", productsRouter)