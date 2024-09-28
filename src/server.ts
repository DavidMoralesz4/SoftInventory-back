import express from "express";
import morgan from "morgan";
import { clientsRoute } from "./routes/clientsRouter";
import { orderRouter } from "./routes/orderRouter";
import { productsRouter } from "./routes/productsRouter";
import cors from "cors";

export const server = express();

const corsOptions = {
  origin: "https://softinventory-back-production.up.railway.app",
  optionsSuccesStatus: 200,
  methods: "GET, POST, PUT, DELETE",// metodos que podre ejecutar en mi front
  allowedHeaders: 'Content-Type,Authorization' // esto me dara autorizacion al mi front
};

server.use(cors(corsOptions));

server.use(morgan("dev"));

server.use(express.json());

server.use("/api", clientsRoute);
server.use("/api", orderRouter);
server.use("/api", productsRouter);

