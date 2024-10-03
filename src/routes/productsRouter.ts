import { Router } from "express";
import { createNewProduct, deleteProduct, getProductId, getProductsController } from "../controllers/productsController";

export const productsRouter: Router = Router()

productsRouter.get("/products", getProductsController)

productsRouter.delete("/product/deleted/:id", deleteProduct)

productsRouter.post("/products/create", createNewProduct)

productsRouter.get("/products/:id", getProductId)