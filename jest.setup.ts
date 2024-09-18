import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
//   const uri = mongoServer.getUri();

  await mongoose.connect(
    "mongodb+srv://jd3285201:8ctmiax2Hm4izO7i@prueba.8tzna.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=prueba"
  );
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
