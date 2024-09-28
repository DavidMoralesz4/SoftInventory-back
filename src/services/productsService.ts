import { Product } from "../models/Products"

interface ProductProps {
    name: string
    description: string
    stock: string
    image_url: string
    price: number
}

export const getProducts = async() => {
    const products = await Product.find()
    return products
}

export const createProducts = async(product: ProductProps) => {
    const productsCreate = await Product.create(product)
    return productsCreate
}

export const productsId = async(id: string) => {
    const productId = Product.findById(id)
    return productId
}
