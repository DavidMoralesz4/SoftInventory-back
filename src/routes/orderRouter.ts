import { Router } from "express";
import { getOrderController, orderController, updateStatusOrderController } from "../controllers/orderController";

export const orderRouter: Router = Router()

orderRouter.post("/order/create", orderController)
orderRouter.put("/order/update/:order_id", updateStatusOrderController)
orderRouter.get("/order", getOrderController)
