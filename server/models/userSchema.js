const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  // avatar: {
  //   type: String,
  //   require: true,
  // },
  // state: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  // }
});

//we are hashing a password
userShema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model("user", userShema);
module.exports = User;
