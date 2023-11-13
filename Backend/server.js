const express = require("express");
const MongoConnection = require("./connection/connection");
const { PORT } = require("./config/config");
const router = require("./routes/index.js");
const app = express();

app.use(express.json());

app.use(router);

MongoConnection();

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});
