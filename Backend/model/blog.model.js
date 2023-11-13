const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    tags: {
      type: [],
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blogs = new mongoose.model("Blog", BlogsSchema);
module.exports = Blogs;
