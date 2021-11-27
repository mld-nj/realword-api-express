const express = require("express");
const articleCtrl = require("../controller/article");
const router = express.Router();
//获取指定用户文章列表
router.get("/", articleCtrl.getArtices);
//feed articles
router.get("/feed", articleCtrl.feedArticles);
//获取用户文章
router.get("/:slug", articleCtrl.getArtcle);
//创建文章
router.post("/", articleCtrl.createArticle);
//更新指定文章
router.put("/:slug", articleCtrl.updateArticle);
//删除指定文章
router.delete("/:slug", articleCtrl.deleteArticle);
//给指定文章添加评论
router.post("/:slug/comments", articleCtrl.addComment);
//获取指定文章评论
router.get("/:slug/comments", articleCtrl.getComments);
//删除指定评论
router.delete("/:slug/comments/:id", articleCtrl.deleteComment);
//指定最喜欢文章
router.post("/:slug/favorite", articleCtrl.addFavorite);
//取消喜欢的文章
router.delete("/:slug/favorite", articleCtrl.deleteFavorite);
module.exports = router;
