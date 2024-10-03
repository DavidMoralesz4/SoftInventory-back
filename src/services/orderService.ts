import mongoose, { ObjectId } from "mongoose";
import { Client } from "../models/Clients";
import { Order } from "../models/Orders";
import { Product } from "../models/Products";

interface ClientData {
  first_name: string;
  last_name: string;
  document: string;
  email: string;
  phone: number;
  address: string;
}

export const getOrderService = async () => {
  const orders = await Order.find()
    .populate({
      path: "client_id", // Poblamos el campo client_id
      model: "Client",
      select: "first_name last_name document email phone address", // Seleccionamos las propiedades que queremos mostrar
    })
    .populate({
      path: "product_ids", // Poblamos el campo product_ids
      model: "Product",
      select: "name price description", // Seleccionamos las propiedades de los productos
    });

  return orders;
};

export const createOrderService = async (
  document: string,
  product_ids: string[],
  dataClient?: ClientData
) => {
  try {
    // Verificar si el cliente existe
    let client = await Client.findOne({ document });

    if (!client && dataClient) {
      client = new Client({
        first_name: dataClient.first_name,
        last_name: dataClient.first_name,
        document: dataClient.document,
        address: dataClient.address,
        email: dataClient.email,
        phone: dataClient.phone,
      });
      return client.save();
    }

    if (!client) {
      throw new Error("Este cliente no existe, por favor crea uno");
    }

    // Obtener el producto por su id
    const products = await Product.find({ _id: { $in: product_ids } });
    if (!products.length) {
      throw new Error("No se encontraron productos");
    }

    const total = products.reduce((sum, product) => {
      const price = product.price ?? 0; // Si el precio es null o undefined, lo consideramos como 0
      if (typeof price !== "number") {
        throw new Error(
          `El precio del producto con id ${product._id} no es válido`
        );
      }
      return sum + price;
    }, 0);

    // Crear la orden con el cliente y el producto
    const order = new Order({
      client_id: client._id,
      product_ids: products.map((product) => product._id),
      status: ["Pendiente", "Pago", "Rechazado"],
      total: total, // Asignamos el total calculado
    });

    await order.save();

    return order;
  } catch (error: any) {
    throw new Error(`Error al crear la orden: ${error.message}`);
  }
};


export const updateOrderService = async (status: any, order_id: any) => {
  try {
    // Verificar si el order_id es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(order_id)) {
      throw new Error('ID de orden inválido');
    }

    const updated = await Order.findOneAndUpdate(
      { _id: order_id },
      { $set: { status: [status]} },
      { runValidators: true, new: true } 
    );

    if (!updated) {
      throw new Error('Orden no encontrada');
    }

    return updated;

  } catch (error: any) {
    // Manejo del error
    console.error('Error al actualizar la orden:', error.message);
    throw error;
  }
};
