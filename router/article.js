const express = require("express");
const router = express.Router();
//获取指定用户文章列表
router.get("/", async (req, res) => {
  try {
    res.send("get/api/articles");
  } catch (err) {
    next(err);
  }
});
//feed articles
router.get("/feed", async (req, res) => {
  try {
    res.send("get/api/articles/feed");
  } catch (err) {
    next(err);
  }
});
//获取用户文章
router.get("/:slug", async (req, res) => {
  try {
    res.send("get/api/articles/:slug");
  } catch (err) {
    next(err);
  }
});
//创建文章
router.post("/", async (req, res) => {
  try {
    res.send("post/api/articles");
  } catch (err) {
    next(err);
  }
});
//更新指定文章
router.put("/:slug", async (req, res) => {
  try {
    res.send("put/api/articles/:slug");
  } catch (err) {
    next(err);
  }
});
//删除指定文章
router.delete("/:slug", async (req, res) => {
  try {
    res.send("delete/api/articles/:slug");
  } catch (err) {
    next(err);
  }
});
//给指定文章添加评论
router.post("/:slug/comments", async (req, res) => {
  try {
    res.send("post/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});
//获取指定文章评论
router.get("/:slug/comments", async (req, res) => {
  try {
    res.send("get/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});
//删除指定评论
router.delete("/:slug/comments/:id", async (req, res) => {
  try {
    res.send("delete/api/articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
});
//指定最喜欢文章
router.post("/:slug/favorite", async (req, res) => {
  try {
    res.send("post/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});
//取消喜欢的文章
router.delete("/:slug/favorite", async (req, res) => {
  try {
    res.send("delete/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
