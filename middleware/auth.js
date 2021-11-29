const { verify } = require("../util/jwt");
const { User } = require("../model");
module.exports = async (req, res, next) => {
  //从请求头获取token数据
  let token = req.headers.authorization;
  token = token ? token.split("Bearer ")[1] : null;
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await verify(token);
    req.user = await User.findOne({ _id: decodedToken.userId });
    next();
  } catch (err) {
    return next(err);
  }
};
