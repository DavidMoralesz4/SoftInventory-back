import { Client } from "../models/Clients";
import { Order } from "../models/Orders";
import { Product } from "../models/Products";

export const getOrderService = async() => {
    const orders = await Order.find()
    .populate({
      path: 'client_id', // Poblamos el campo client_id
      model: 'Client',
      select: 'first_name last_name document email phone address' // Seleccionamos las propiedades que queremos mostrar
    })
    .populate({
      path: 'product_ids', // Poblamos el campo product_ids
      model: 'Product',
      select: 'name price description' // Seleccionamos las propiedades de los productos
    });

    return orders
}

export const createOrderService = async (document: string, product_ids: string[]) => {
    try {
      // Verificar si el cliente existe
      const client = await Client.findOne({ document });
      if (!client) {
        throw new Error("Usuario no encontrado, Por favor crea uno");
      }
  
      // Obtener el producto por su id
      const products = await Product.find({ _id: { $in: product_ids } })
      if (!products.length) {
        throw new Error("No se encontraron productos");
      }
  
      const total = products.reduce((sum, product) => {
        const price = product.price ?? 0; // Si el precio es null o undefined, lo consideramos como 0
        if (typeof price !== 'number') {
          throw new Error(`El precio del producto con id ${product._id} no es válido`);
        }
        return sum + price;
      }, 0);

      // Crear la orden con el cliente y el producto
      const order = new Order({
        client_id: client._id,
        product_ids: products.map((product) => product._id),
        status: "Pendiente",
        total: total, // Asignamos el total calculado
      });
  
  
      await order.save();
  
      return order;
    } catch (error: any) {
      throw new Error(`Error al crear la orden: ${error.message}`);
    }
  };