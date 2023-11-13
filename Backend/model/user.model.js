const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", UserSchema);
module.exports = User;
