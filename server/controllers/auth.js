const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userSchema");
const authenticateMiddleware = require("../middlewares/authenticate");

const logIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ error: "Please input your Email and Password" });
  } else {
    try {
      await User.findOne({ email: email }).then((data) => {
        if (data) {
          const isMatch = bcrypt.compare(password, data.password);

          if (!isMatch) {
            res.status(422).send({ error: "Failure Password" });
          } else {
            const token = authenticateMiddleware.generateAuthToken(data._id);
            res.cookie("jwttoken", token, {
              path: "/",
              expires: new Date(Date.now() + 3600 * 1000),
              httpOnly: true,
            });
            res.send({ message: "Login successfully", data: data });
          }
        } else {
          res.status(422).send({ error: "Non register Email" });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "please fill all input" });
  } else {
    try {
      const userExist = await User.findOne({ email: email });
      console.log(userExist);
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      } else {
        const user = new User({ name, email, password });
        user.save();
        res.status(201).json({ message: "Register successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    console.log("something went wrong!");
  }
};

module.exports = { logIn, register, getAllUser };
