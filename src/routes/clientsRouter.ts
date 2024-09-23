import { Router } from "express";
import { createClient, getClients } from "../controllers/clientsController";

export const clientsRoute: Router = Router()

clientsRoute.get("/clients", getClients)

clientsRoute.post("/clients/create", createClient)
