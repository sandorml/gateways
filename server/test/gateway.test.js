const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const GatewayModel = require("../db/models/gateway");

const amount = 32;
const mongoAddr = "mongodb://localhost";
const db = "gateway";

describe("Gateways routes", () => {
  beforeAll(() => {
    mongoose.connect(`${mongoAddr}/${db}`, { useNewUrlParser: true });
  });

  afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should retrieve a list of gateways", async () => {
    for (let i = 0; i < amount; i++) {
      await GatewayModel.create({
        ipv4Address: "192.168.1.1",
        serial: Math.random().toString(),
        name: "gateway",
      });
    }

    const response = await request(app).get("/api/gateway");
    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toEqual(amount);
  });

  it("should retrieve a gateway", async () => {
    const gateway = await GatewayModel.create({
      ipv4Address: "192.168.1.1",
      serial: Math.random().toString(),
      name: "gateway",
    });

    const response = await request(app).get(`/api/gateway/${gateway.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body._id).toEqual(gateway.id);
    expect(response.body.ipv4Address).toEqual(gateway.ipv4Address);
    expect(response.body.serial).toEqual(gateway.serial);
    expect(response.body.name).toEqual(gateway.name);
  });

  it("should create a gateway", async () => {
    const gateway = {
      ipv4Address: "192.168.1.1",
      serial: Math.random().toString(),
      name: "gateway",
    };

    const response = await request(app).post(`/api/gateway`).send(gateway);
    expect(response.statusCode).toEqual(201);
    expect(response.body.ipv4Address).toEqual(gateway.ipv4Address);
    expect(response.body.serial).toEqual(gateway.serial);
    expect(response.body.name).toEqual(gateway.name);
  });

  it("should delete a gateway", async () => {
    const gateway = await GatewayModel.create({
      ipv4Address: "192.168.1.1",
      serial: Math.random().toString(),
      name: "gateway",
    });

    let response = await request(app).delete(`/api/gateway/${gateway.id}`);
    expect(response.statusCode).toEqual(200);

    response = await request(app).get(`/api/gateway/${gateway.id}`);
    expect(response.statusCode).toEqual(404);
  });

  it("should update a gateway", async () => {
    const gateway = await GatewayModel.create({
      ipv4Address: "192.168.1.1",
      serial: Math.random().toString(),
      name: "gateway",
    });

    // Update fields independently
    let response = await request(app).patch(`/api/gateway/${gateway.id}`).send({
      ipv4Address: "10.0.2.1",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body.ipv4Address).toEqual("10.0.2.1");

    response = await request(app).patch(`/api/gateway/${gateway.id}`).send({
      serial: "test",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body.serial).toEqual("test");

    response = await request(app).patch(`/api/gateway/${gateway.id}`).send({
      name: "gateway2",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body.name).toEqual("gateway2");

    // Update a whole object
    const updated = {
      name: "gateway3",
      ipv4Address: "127.0.0.1",
      serial: "new serial",
    };
    response = await request(app)
      .patch(`/api/gateway/${gateway.id}`)
      .send(updated);
    expect(response.body.name).toEqual(updated.name);
    expect(response.body.ipv4Address).toEqual(updated.ipv4Address);
    expect(response.body.serial).toEqual(updated.serial);
  });
});
