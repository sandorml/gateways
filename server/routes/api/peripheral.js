const PeripheralModel = require("../../db/models/peripheral");
const router = require("express").Router();
const { resolveGateway, resolvePeripheral } = require("../../middleware");

// list
router.get("/", async (req, res, next) => {
  PeripheralModel.find().exec((err, items) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.status(200).json(items);
  });
});

// detail
router.get("/:id", resolvePeripheral, async (req, res, next) => {
  return res.status(200).json(req.peripheral);
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

// peripherals that belong to a gateway
router.get("/gateway/:id", resolveGateway, async (req, res, next) => {
  PeripheralModel.find({ gateway: req.params.id }).exec((err, items) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.status(200).json(items);
  });
});

module.exports = router;
