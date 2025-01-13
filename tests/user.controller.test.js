const request = require("supertest");
const app = require("../src/app"); // Importa l'app Express

describe("User REST API", () => {
  // TODO: re-enable once test infrastructure is in place
  it.skip("should return a user by ID", async () => {
    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", "1");
  });

  // TODO: re-enable once test infrastructure is in place
  it.skip("should create a new user", async () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    const response = await request(app).post("/api/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name", "John Doe");
  });
});
