import { Router } from "express";
import {
  getOrderController,
  orderController,
  updateStatusOrderController,
} from "../controllers/orderController";

export const orderRouter: Router = Router();

orderRouter.get("/order", getOrderController);
/**
 * @openapi
 * /api/order:
 *   get:
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */

orderRouter.put("/order/update/:order_id", updateStatusOrderController);
/**
 * @openapi
 * /api/order/update/:order_id:
 *   put:
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */


orderRouter.post("/order/create", orderController);
/**
 * @openapi
 * /api/order/create:
 *   post:
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */