const express = require("express");
const router = express.router();
router.get("/tags", async (req, res) => {
  try {
    res.send("get/api/tags");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
