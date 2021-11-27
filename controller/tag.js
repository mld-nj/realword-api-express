exports.getTags = async (req, res) => {
  try {
    res.send("get/api/tags");
  } catch (err) {
    next(err);
  }
};
