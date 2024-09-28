import "dotenv/config";

/// Aqui configuro el puerto
export const PORT = process.env.PORT || 3001;
export const MONGO_URI = process.env.MONGO_URI