const Blogs = require("../model/blog.model");

const addBlogs = async (req, res) => {
  const { title, content, tags, author } = req.body;

  const data = Blogs({
    title: title,
    content: content,
    tags: tags,
    author: author,
  });

  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = { addBlogs };
