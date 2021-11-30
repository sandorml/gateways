const { Schema, model } = require("mongoose");

const PeripheralSchema = new Schema({
  uid: { type: Number, required: true },
  vendor: String,
  dateCreated: { type: Date, default: Date.now },
  status: { type: Boolean, required: true, default: false },
  gateway: {
    type: Schema.Types.ObjectId,
    ref: "GatewayModel",
    validate: {
      validator: async (value) => {
        const itemsCount = await PeripheralModel.countDocuments({
          gateway: value,
        });
        return itemsCount < 10;
      },
      message: "Gateway already has its 10 devices",
    },
  },
});

const PeripheralModel = model("PeripheralModel", PeripheralSchema);
module.exports = PeripheralModel;
