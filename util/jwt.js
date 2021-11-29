const jwt = require("jsonwebtoken");
const config = require("../config/config.default");
//生成jwt
exports.sign = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.jwtSercret,
      //   {
      //     expiresIn: 30,
      //   },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      }
    );
  });
};
//验证jwt

exports.verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSercret, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
};
