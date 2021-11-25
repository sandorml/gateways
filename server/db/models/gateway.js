const { Schema, model } = require("mongoose");

const ipV4Format =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

const GatewaySchema = new Schema({
  serial: { type: String, required: true, unique: true },
  name: { type: String },
  ipv4Address: { type: String, required: true, match: ipV4Format },
});

const GatewayModel = model("GatewayModel", GatewaySchema);
module.exports = GatewayModel;
