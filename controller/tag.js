exports.getTags = async (req, res, next) => {
  try {
    res.send("get/api/tags");
  } catch (err) {
    next(err);
  }
};
