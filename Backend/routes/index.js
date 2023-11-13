const express = require("express");
const {signup, login} = require("../controller/user.controller");
const { addBlogs } = require("../controller/blogs.controller");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/add-blogs', addBlogs);

module.exports = router;
