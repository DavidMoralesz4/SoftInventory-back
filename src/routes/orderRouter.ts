import { Router } from "express";
import { getOrderController, orderController } from "../controllers/orderController";

export const orderRouter = Router()

orderRouter.post("/order/create", orderController)
orderRouter.get("/order", getOrderController)
