const { User } = require("../model/index");
//用户登录
exports.login = async (req, res, next) => {
  try {
    res.send("post/users/login");
  } catch (err) {
    next(err);
  }
};
//用户注册
exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body.user);
    await user.save();
    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};
//获取当前用户
exports.getUeser = async (req, res, next) => {
  try {
    res.send("get/user");
  } catch (err) {
    next(err);
  }
};
//更新当前用户
exports.updateUser = async (req, res, next) => {
  try {
    res.send("put/user");
  } catch (err) {
    next(err);
  }
};
