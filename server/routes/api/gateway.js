const GatewayModel = require("../../db/models/gateway");
const router = require("express").Router();
const { resolveGateway } = require("../../middleware");

// list
router.get("/", async (req, res, next) => {
  GatewayModel.find().exec((err, items) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.status(200).json(items);
  });
});

// detail
router.get("/:id", resolveGateway, async (req, res, next) => {
  return res.status(200).json(req.gateway);
});

// create
router.post("/", async (req, res, next) => {
  const model = new GatewayModel(req.body);
  await model.save((err, item) => {
    if (err) return res.status(400).send({ error: err.message });
    return res.status(201).json(item);
  });
});

// update
router.patch("/:id", resolveGateway, async (req, res, next) => {
  const model = {
    ...req.gateway._doc,
    ...req.body,
  };
  await req.gateway.overwrite(model).save((err, item) => {
    if (err) return res.status(400).send({ error: err.message });
    return res.status(200).json(item);
  });
});

// delete
router.delete("/:id", resolveGateway, async (req, res, next) => {
  const gateway = req.gateway;
  await gateway.remove((err, item) => {
    if (err) return res.status(500).send({ error: err.message });
    return res.status(200).json(item);
  });
});

module.exports = router;
