const router = require("express").Router();

router.use("/gateway", require("./gateway"));
router.use("/peripheral", require("./peripheral"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
