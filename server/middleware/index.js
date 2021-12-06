const GatewayModel = require("../db/models/gateway");
const PeripheralModel = require("../db/models/peripheral");


module.exports.resolvePeripheral = async (req, res, next) => {
  PeripheralModel.findOne({ _id: req.params.id }).exec((err, item) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else if (item === null) {
      res.status(404).send({ error: "peripheral not found" });
    } else {
      req.peripheral = item;
      next();
    }
  });
}


module.exports.resolveGateway = async (req, res, next) => {
  GatewayModel.findOne({ _id: req.params.id }).exec((err, item) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else if (item === null) {
      res.status(404).send({ error: "gateway not found" });
    } else {
      req.gateway = item;
      next();
    }
  });
}


