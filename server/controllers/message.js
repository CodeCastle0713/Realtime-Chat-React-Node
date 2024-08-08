const Msg = require("../models/messageSchema");

const saveMessage = (req, res) => {
  const { from, to, message } = req.body;
  const msg = new Msg({ from, to, message });
  msg.save();
  res.status(200).json({ message: "Saving message successfully." });
};

const getMessage = async (req, res) => {
  const { from, to } = req.body;
  try {
    const query = {
      $or: [
        { from: from, to: to },
        { from: to, to: from },
      ],
    };
    const messages = await Msg.find(query);
    res.send(messages);
  } catch {
    console.log("something went wrong!");
  }
};

module.exports = { saveMessage, getMessage };
