import { Router } from "express";
import { createNewProduct, getProductId, getProductsController } from "../controllers/productsController";

export const productsRouter = Router()

productsRouter.get("/products", getProductsController)
productsRouter.post("/products/create", createNewProduct)

productsRouter.get("/products/:id", getProductId)