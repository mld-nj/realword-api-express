const validator = require("../middleware/vaildator");
const { body } = require("express-validator");
const { Article } = require("../model/index");
const auth = require("../middleware/auth");
exports.createArticle = validator([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);
exports.updateArticle = [
  validator([validator.isValidObjectId(["params"], "slug")]),
  async (req, res, next) => {
    const articleId = req.params.slug;
    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).end();
    }
    req.article = article;
    console.log(article);
    next();
  },
  async (req, res, next) => {
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end();
    }
    next();
  },
];
exports.deleteArticle = exports.updateArticle;
