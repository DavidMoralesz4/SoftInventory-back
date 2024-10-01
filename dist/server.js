"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const clientsRouter_1 = require("./routes/clientsRouter");
const orderRouter_1 = require("./routes/orderRouter");
const productsRouter_1 = require("./routes/productsRouter");
const cors_1 = __importDefault(require("cors"));
exports.server = (0, express_1.default)();
const corsOptions = {
    origin: ["https://empowering-gentleness-production.up.railway.app", "http://localhost:3000"], // Dominios permitidos
    optionsSuccessStatus: 200, // Corrige el nombre de esta opción (es `optionsSuccessStatus`, no `optionsSuccesStatus`)
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
    credentials: true, // Permite enviar cookies o autenticación (si es necesario)
};
exports.server.use((0, cors_1.default)(corsOptions));
exports.server.use((0, morgan_1.default)("dev"));
exports.server.use(express_1.default.json());
exports.server.use("/api", clientsRouter_1.clientsRoute);
exports.server.use("/api", orderRouter_1.orderRouter);
exports.server.use("/api", productsRouter_1.productsRouter);
