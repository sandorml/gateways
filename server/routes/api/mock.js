const router = require("express").Router();

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.get("/", async (req, res, next) => {
  try {
    // const { recipientId, text, conversationId, sender } = req.body;
    res.json('test');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
