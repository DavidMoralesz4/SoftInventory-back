import { Router } from "express";
import {
  createNewProduct,
  deleteProduct,
  getProductId,
  getProductsController,
} from "../controllers/productsController";

export const productsRouter: Router = Router();

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
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

productsRouter.get("/products", getProductsController);

productsRouter.delete("/product/deleted/:id", deleteProduct);

productsRouter.post("/products/create", createNewProduct);

productsRouter.get("/products/:id", getProductId);
