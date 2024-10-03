import { Request, Response } from "express";
import { createOrderService, getOrderService, updateOrderService } from "../services/orderService";
import mongoose from "mongoose";

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

export const updateStatusOrderController = async (req: Request, res: Response) => {
  const {order_id} = req.params
  const {status} = req.body
  
    const updateOrder = await updateOrderService(status, order_id)

    res.status(200).json({message: 'Orden actualizada exitozamente', data: updateOrder});


  if (!updateOrder) {
    return res.status(404).json({ message: 'Oreden no encontrada' });
  }
}
 
export const orderController = async (req: Request, res: Response) => {
  try {
    const { documento, product_ids, dataClient } = req.body; // Extraemos los datos del cliente en caso de que sea necesario

    // Verificar si los campos obligatorios están presentes
    if (!documento || !product_ids) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    // Llamamos al servicio para crear la orden, pasando los datos del cliente en caso de que no exista
    const order = await createOrderService(documento, product_ids, dataClient);
    
    return res.status(201).json({ message: "Orden creada con éxito", order });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};