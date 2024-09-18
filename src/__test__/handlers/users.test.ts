import { describe, test, expect } from "@jest/globals";
import request from "supertest";
import { server } from "../../server";

describe("Usuarios", () => {
  test("Debe consultar por todos los usuarios creados", async () => {
    const res = await request(server).get("/api/clients").send({
      first_name: "Jose",
      last_name: "Morales",
      document: "993045031",
      email: "test@test.net",
      phone: 3212345464,
      address: "T 60-34 PISO 4",
    });

    expect(res.statusCode).toBe(201);
  });

  test("Debe poder crear un nuevo usuario", async () => {
    const res = await request(server).post("/api/clients/create").send({
      first_name: "Jose",
      last_name: "Morales",
      document: "993045031",
      email: "test@test.net",
      phone: 3212345464,
      address: "T 60-34 PISO 4",
    });
    expect(res.statusCode).toBe(201);
  });
});
