const validator = require("../middleware/vaildator");
const { body } = require("express-validator");
const { User } = require("../model/index");
const md5 = require("../util/md5");
exports.register = validator([
  //配置验证规则
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ username });
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
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject("邮箱已存在");
      }
    }),
]);
exports.login = [
  validator([
    body("user.password").notEmpty().withMessage("密码不能为空"),
    body("user.email")
      .notEmpty()
      .withMessage("邮箱不能为空")
      .isEmail()
      .withMessage("邮箱格式不正确"),
  ]),
  validator([
    body("user.email").custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select([
        "password",
        "username",
        "bio",
        "image",
      ]);
      if (!user) {
        return Promise.reject("用户不存在");
      }

      req.user = user;
    }),
  ]),
  validator([
    body("user.password").custom(async (password, { req }) => {
      if (md5(password) != req.user.password) {
        return Promise.reject("密码错误");
      }
    }),
  ]),
];
