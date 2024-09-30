import express from "express";
import morgan from "morgan";
import { clientsRoute } from "./routes/clientsRouter";
import { orderRouter } from "./routes/orderRouter";
import { productsRouter } from "./routes/productsRouter";
import cors from "cors";

export const server = express();

const corsOptions = {
  origin: ["https://empowering-gentleness-production.up.railway.app", "http://localhost:3000"], // Dominios permitidos
  optionsSuccessStatus: 200, // Corrige el nombre de esta opción (es `optionsSuccessStatus`, no `optionsSuccesStatus`)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
  credentials: true, // Permite enviar cookies o autenticación (si es necesario)
};

server.use(cors(corsOptions));

server.use(morgan("dev"));

server.use(express.json());

server.use("/api", clientsRoute);
server.use("/api", orderRouter);
server.use("/api", productsRouter); 
