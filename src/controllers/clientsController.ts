import { Request, Response } from "express";
import {
    clientService,
  createClientService,
} from "../services/clientsService";

export const getClients = async(req: Request, res: Response) => {
    try {
      const clients = await clientService();
    res.status(201).json(clients);
    } catch(error: any){
      res.status(500).json({error: "Error al mostrar los clientes"})
    }
}

export const createClient = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, document, email, phone, address } = req.body;

    const clients = await createClientService({first_name, last_name, document, email, phone, address});
    res.status(201).json({message: "Usuario creado con exito!"});
  } catch (error) {
    res.status(400).json({ message: "Error interno" });
  }
};
