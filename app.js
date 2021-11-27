const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router/index");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("xxx");
});
//挂载路由
app.use("/api", router);
app.listen(PORT, () => {
  console.log("server is running");
});
