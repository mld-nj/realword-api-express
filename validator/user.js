const validator = require("../middleware/vaildator");
const { body } = require("express-validator");
const { User } = require("../model/index");
exports.register = validator([
  //配置验证规则
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (value) => {
      const user = await User.findOne(value);
      if (user) {
        return Promise.reject("用户名已存在");
      }
    }),
  ,
  body("user.password").notEmpty().withMessage("密码不能为空"),
  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    //bail前面出错就不继续往下执行链式调用
    .bail()
    .custom(async (value) => {
      const user = await User.findOne(value);
      if (user) {
        return Promise.reject("邮箱已存在");
      }
    }),
]);
