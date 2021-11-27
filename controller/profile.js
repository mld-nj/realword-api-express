//获取指定用户资料
exports.getProfiles = async (req, res) => {
  try {
    res.send("post/profiles/:username");
  } catch (err) {
    next(err);
  }
};
//关注用户
exports.addFollow = async (req, res) => {
  try {
    res.send("post/profiles/:username/follow");
  } catch (err) {
    next(err);
  }
};
//取消关注用户
exports.deleteFollow = async (req, res) => {
  try {
    res.send("delete/profiles/:username/follow");
  } catch (err) {
    next(err);
  }
};
