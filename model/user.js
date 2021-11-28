const mongoose = require("mongoose");
const baseMoudel = require("./base-model");
const userSchema = new mongoose.Schema({
  ...baseMoudel,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});
module.exports = userSchema;
