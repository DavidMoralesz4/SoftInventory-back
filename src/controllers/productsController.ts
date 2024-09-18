import { Request, Response } from "express";
import {
  getProducts,
  createProducts,
  productsId,
} from "../services/productsService";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(201).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, stock, image_url, price } = req.body;

    const newProduct = await createProducts({
      name,
      description,
      stock,
      image_url,
      price,
    });
    res.status(201).json({ message: "Producto creado con exito" });
  } catch (error) {
    res.status(500).json({ errro: "Error al crear producto" });
  }
};

export const getProductId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const productId = await productsId(id);
    res.status(201).json(productId);
  } catch (error) {
    res.status(500).json({ error: "Error al traer a un producto" });
  }
};
