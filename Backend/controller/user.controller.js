const User = require("../model/user.model");

const signup = async (req, res, next) => {
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
    next(error);
  }
};

const login = async (req, res, next) => {
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
    next(error);
  }
};

module.exports = { signup, login };
