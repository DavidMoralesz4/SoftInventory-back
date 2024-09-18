import { Request, Response } from "express";
import { createOrderService, getOrderService } from "../services/orderService";

export const getOrderController = async (req: Request, res: Response) => {
  try {
    const order = await getOrderService();

    if (!order) {
      res.status(400).json({ message: "No hay ordenes por aqui..." });
    } else {
      res.status(201).json(order);
    }
  } catch (error: any) {
    res.status(500).json({ error: "Al parecer no existe una orden" });
  }
};

export const orderCrontroller = async (req: Request, res: Response) => {
  try {
    const { documento, product_ids } = req.body;

    if (!documento && !product_ids) {
      res.status(500).json({ message: "Faltan campos requeridos" });
    }

    if (!documento) {
      res.status(500).json({ message: "Ingresa numero de documento" });
    }

    const order = await createOrderService(documento, product_ids);
    res.status(201).json({ message: "Orden creada con exito" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
