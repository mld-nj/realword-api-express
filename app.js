const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errHandler = require("./middleware/err-handler");
const router = require("./router/index");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(cors());
//挂载路由
app.use("/api", router);
//挂载处理函数中间件
app.use(errHandler());
app.listen(PORT, () => {
  console.log("server is running");
});
