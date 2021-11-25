const GatewayModel = require("../../db/models/gateway");
const PeripheralModel = require("../../db/models/peripheral");
const router = require("express").Router();

// middleware
async function resolvePeripheral(req, res, next) {
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

// list
router.get("/", async (req, res, next) => {
  PeripheralModel.find().exec((err, items) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.json(items);
  });
});

// detail
router.get("/:id", resolvePeripheral, async (req, res, next) => {
  return res.json(req.peripheral);
});

// create
router.post("/", async (req, res, next) => {
  const model = new PeripheralModel(req.body);
  await model.save((err, item) => {
    if (err) return res.status(400).send({ error: err.message });
    return res.status(201).json(item);
  });
});

// update
router.patch("/:id", resolvePeripheral, async (req, res, next) => {
  const model = {
    ...req.peripheral._doc,
    ...req.body,
  };
  await req.peripheral.overwrite(model).save((err, item) => {
    if (err) return res.status(400).send({ error: err.message });
    return res.status(200).json(item);
  });
});

// delete
router.delete("/:id", resolvePeripheral, async (req, res, next) => {
  const peripheral = req.peripheral;
  await peripheral.remove((err, item) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).json(item);
    }
  });
});

module.exports = router;
