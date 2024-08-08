const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
    require: true,
    default: new Date(),
  },
});

const Messages = mongoose.model("msg", messageSchema);
module.exports = Messages;
