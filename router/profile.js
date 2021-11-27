const express = require("express");
const router = express.Router();
//获取指定用户资料
router.post("/:username", async (req, res) => {
  try {
    res.send("post/profiles/:username");
  } catch (err) {
    next(err);
  }
});
//关注用户
router.post("/:username/follow", async (req, res) => {
  try {
    res.send("post/profiles/:username/follow");
  } catch (err) {
    next(err);
  }
});
//取消关注用户
router.delete("/:username/follow", async (req, res) => {
  try {
    res.send("delete/profiles/:username/follow");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
