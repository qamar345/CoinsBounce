const User = require("../model/user.model");

const signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  const data = User({
    name: name,
    username: username,
    email: email,
    password: password,
  });

  try {
    await data.save();
    res.status(200).json("Data Submitted");
  } catch (error) {
    console.log(error);
    res.status(401).json("Failed");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await User.findOne({
      username: username,
      password: password,
    });
    if (result != null) {
      res.status(201).json(result);
    } else {
      res.status(402).json("Wrong Credentials");
    }
  } catch (error) {
    res.status(402).json("Wrong Credentials");
  }
};

module.exports = { signup, login };
