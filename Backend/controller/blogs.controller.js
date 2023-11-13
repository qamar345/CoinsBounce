const Blogs = require("../model/blog.model");

const addBlogs = async (req, res) => {
  const { title, content, tags, author, imageURL } = req.body;

  const values = Blogs({
    title: title,
    content: content,
    tags: tags,
    author: author,
    imageURL: imageURL,
  });

  //   console.log(data)

  try {
    await values.save();
    res.status(201).json("Data Submitted");
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

module.exports = { addBlogs };
