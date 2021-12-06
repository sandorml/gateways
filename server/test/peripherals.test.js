const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const GatewayModel = require("../db/models/gateway");
const PeripheralModel = require("../db/models/peripheral");

const amount = 5;
const mongoAddr = "mongodb://localhost";
const db = "gateway";

let gateway = {};

describe("Peripheral routes", () => {
  beforeAll(() => {
    mongoose.connect(`${mongoAddr}/${db}`, { useNewUrlParser: true });
  });

  beforeEach(async () => {
    gateway = await GatewayModel.create({
      ipv4Address: "192.168.1.1",
      serial: Math.random().toString(),
      name: "gateway",
    });
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

  it("should retrieve a list of peripherals", async () => {
    for (let i = 0; i < amount; i++) {
      await PeripheralModel.create({
        uid: i,
        vendor: `vendor-${i}`,
        gateway: gateway.id,
      });
    }

    let response = await request(app).get("/api/peripheral");
    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toEqual(amount);
  });

  it("should retrieve a peripheral", async () => {
    const peripheral = await PeripheralModel.create({
      uid: 1,
      vendor: `vendor-1`,
      gateway: gateway.id,
    });

    const response = await request(app).get(`/api/peripheral/${peripheral.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body._id).toEqual(peripheral.id);
    expect(response.body.uid).toEqual(peripheral.uid);
    expect(response.body.vendor).toEqual(peripheral.vendor);
    expect(response.body.gateway).toEqual(gateway.id);
  });

  it("should create a peripheral", async () => {
    const peripheral = {
      uid: 1,
      vendor: `vendor-1`,
      gateway: gateway.id,
    };

    const response = await request(app)
      .post(`/api/peripheral`)
      .send(peripheral);
    expect(response.statusCode).toEqual(201);
    expect(response.body.uid).toEqual(peripheral.uid);
    expect(response.body.vendor).toEqual(peripheral.vendor);
    expect(response.body.gateway).toEqual(gateway.id);
  });

  it("should delete a peripheral", async () => {
    const peripheral = await PeripheralModel.create({
      uid: 1,
      vendor: `vendor-1`,
      gateway: gateway.id,
    });

    let response = await request(app).delete(
      `/api/peripheral/${peripheral.id}`
    );
    expect(response.statusCode).toEqual(200);

    response = await request(app).get(`/api/peripheral/${peripheral.id}`);
    expect(response.statusCode).toEqual(404);
  });

  it("should update a gateway", async () => {
    const peripheral = await PeripheralModel.create({
      uid: 1,
      vendor: `vendor-1`,
      gateway: gateway.id,
    });

    // Update fields independently
    let response = await request(app)
      .patch(`/api/peripheral/${peripheral.id}`)
      .send({
        uid: 2,
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body.uid).toEqual(2);

    response = await request(app)
      .patch(`/api/peripheral/${peripheral.id}`)
      .send({
        vendor: "test",
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body.vendor).toEqual("test");

    response = await request(app)
      .patch(`/api/peripheral/${peripheral.id}`)
      .send({
        status: true,
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toBeTruthy();
  });

  it("should retrieve a list of peripherals that belong to a gateway", async () => {
    for (let i = 0; i < amount; i++) {
      await PeripheralModel.create({
        uid: i,
        vendor: `vendor-${i}`,
        gateway: gateway.id,
      });
    }

    let response = await request(app).get(`/api/peripheral/gateway/${gateway.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toEqual(amount);

    const gateway2 = await GatewayModel.create({
      ipv4Address: "192.168.1.2",
      serial: Math.random().toString(),
      name: "gateway2",
    });

    for (let i = 0; i < amount; i++) {
      await PeripheralModel.create({
        uid: i,
        vendor: `vendor-${i}`,
        gateway: gateway2.id,
      });
    }

    response = await request(app).get(`/api/peripheral/gateway/${gateway2.id}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toEqual(amount);
  });
});
