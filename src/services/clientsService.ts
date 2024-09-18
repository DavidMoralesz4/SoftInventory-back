import { Client } from "../models/Clients"

interface ClientProps {
    first_name: string
    last_name: string
    document: string
    email: string
    phone: number
    address: string
}

export const clientService = async() => {
    const clients = await Client.find()
    return clients
}

export const createClientService = async(client: ClientProps) => {
    const clients = await Client.create(client)
    return clients
}