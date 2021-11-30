const { Article } = require("../model/index");
//获取指定用户文章列表
exports.getArtices = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0, tag, author } = req.query;
    const filter = {};
    tag ? (filter.tagList = tag) : null;
    author ? (filter.author = author) : null;
    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        //-1倒序 1正序
        createdAt: -1,
      });
    const articlesCount = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCount,
    });
  } catch (err) {
    next(err);
  }
};
//feed articles
exports.feedArticles = async (req, res, next) => {
  try {
    res.send("get/api/articles/feed");
  } catch (err) {
    next(err);
  }
};
//获取用户文章
exports.getArtcle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.slug).populate("author");
    if (!article) {
      res.status(404).end();
    }
    res.status(200).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
//创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id;
    article.populate("author");
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
//更新指定文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
//删除指定文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article;
    await article.remove();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
//给指定文章添加评论
exports.addComment = async (req, res, next) => {
  try {
    res.send("post/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};
//获取指定文章评论
exports.getComments = async (req, res, next) => {
  try {
    res.send("get/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};
//删除指定评论
exports.deleteComment = async (req, res, next) => {
  try {
    res.send("delete/api/articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
};
//指定最喜欢文章
exports.addFavorite = async (req, res, next) => {
  try {
    res.send("post/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};
//取消喜欢的文章
exports.deleteFavorite = async (req, res, next) => {
  try {
    res.send("delete/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};
