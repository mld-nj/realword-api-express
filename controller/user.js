const { User } = require("../model/index");
const jwt = require("../util/jwt");
//用户登录
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON();
    delete user.password;
    const token = await jwt.sign({
      userId: user._id,
    });
    res.status(200).json({
      ...user,
      token,
    });
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
exports.getUesr = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
    });
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
