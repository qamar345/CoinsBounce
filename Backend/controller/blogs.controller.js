const Blogs = require("../model/blog.model");

const addBlogs = async (req, res) => {
  const { title, content, tags, category, author, imageURL } = req.body;

  const data = Blogs({
    title: title,
    content: content,
    tags: tags,
    category: category,
    author: author,
    imageURL: imageURL,
  });

  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

const blogs = async (req, res) => {
  try {
    const result = await Blogs.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json(error);
  }
};

const byCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const result = await Blogs.find({ category: category });
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json(error);
  }
};

const deleteBlog = async (req, res) => {
  const { key } = req.body;

  try {
    const data = await Blogs.deleteOne({ _id: key });
    res.status(202).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = { addBlogs, blogs, byCategory, deleteBlog };
