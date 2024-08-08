const cookie = require("cookie");
const jwt = require("jsonwebtoken");

const User = require("../models/userSchema");

const checkToken = (req, res) => {
  if (!req.headers.cookie) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    const { jwttoken } = cookie.parse(req.headers.cookie);
    jwt.verify(jwttoken, process.env.SECRET_KEY, function (err, decoded) {
      if (err) return res.status(401).json({ message: err });
      User.findOne({ _id: decoded._id })
        .then((data) => {
          res.send({ message: "Matching perfectly.", data: data });
        })
        .catch((err) => {
          res.status(401).json({ error: err });
        });
    });
  }
  // next();
};

const clearToken = (req, res) => {
  try {
    res.clearCookie("jwttoken");
    res.send({ message: "clear token successfully" });
  } catch {
    console.log("something went wrong!");
  }
};

const generateAuthToken = (_id) => {
  console.log(_id);
  try {
    let token = jwt.sign({ _id: _id }, process.env.SECRET_KEY);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { checkToken, clearToken, generateAuthToken };
