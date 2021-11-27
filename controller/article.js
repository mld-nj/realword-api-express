//获取指定用户文章列表
exports.getArtices = async (req, res) => {
  try {
    res.send("get/api/articles");
  } catch (err) {
    next(err);
  }
};
//feed articles
exports.feedArticles = async (req, res) => {
  try {
    res.send("get/api/articles/feed");
  } catch (err) {
    next(err);
  }
};
//获取用户文章
exports.getArtcle = async (req, res) => {
  try {
    res.send("get/api/articles/:slug");
  } catch (err) {
    next(err);
  }
};
//创建文章
exports.createArticle = async (req, res) => {
  try {
    res.send("post/api/articles");
  } catch (err) {
    next(err);
  }
};
//更新指定文章
exports.updateArticle = async (req, res) => {
  try {
    res.send("put/api/articles/:slug");
  } catch (err) {
    next(err);
  }
};
//删除指定文章
exports.deleteArticle = async (req, res) => {
  try {
    res.send("delete/api/articles/:slug");
  } catch (err) {
    next(err);
  }
};
//给指定文章添加评论
exports.addComment = async (req, res) => {
  try {
    res.send("post/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};
//获取指定文章评论
exports.getComments = async (req, res) => {
  try {
    res.send("get/api/articles/:slug/comments");
  } catch (err) {
    next(err);
  }
};
//删除指定评论
exports.deleteComment = async (req, res) => {
  try {
    res.send("delete/api/articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
};
//指定最喜欢文章
exports.addFavorite = async (req, res) => {
  try {
    res.send("post/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};
//取消喜欢的文章
exports.deleteFavorite = async (req, res) => {
  try {
    res.send("delete/api/articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
};
