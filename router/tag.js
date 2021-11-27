const express = require("express");
const tagCtrl = require("../controller/tag");
const router = express.router();
router.get("/tags", tagCtrl.getTags);
module.exports = router;
