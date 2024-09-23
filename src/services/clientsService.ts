import { ClientDto } from "../dto/ClientDto"
import { IClientProps } from "../interfaces/IClients"
import { Client } from "../models/Clients"


export const clientService = async() => {
    const clients = await Client.find()
    return clients
}

export const createClientService = async(client: ClientDto) => {
    const clients = await Client.create(client)
    return clients
}