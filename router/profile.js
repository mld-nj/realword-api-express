const express = require("express");
const profileCtrl = require("../controller/profile");

const router = express.Router();

//获取指定用户资料
router.post("/:username", profileCtrl.getProfiles);
//关注用户
router.post("/:username/follow", profileCtrl.addFollow);
//取消关注用户
router.delete("/:username/follow", profileCtrl.deleteFollow);

module.exports = router;
