const mongoose = require("mongoose");
const { MONGO } = require("../config/config");

const MongoConnection = () => {
  try {
    const conn = mongoose.connect(MONGO)
    console.log(`Connection Created`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = MongoConnection;
