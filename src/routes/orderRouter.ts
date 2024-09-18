import { Router } from "express";
import { getOrderController, orderCrontroller } from "../controllers/orderController";

export const orderRouter = Router()

orderRouter.post("/order/create", orderCrontroller)
orderRouter.get("/order", getOrderController)
