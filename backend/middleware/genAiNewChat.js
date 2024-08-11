const { v4: uuidv4 } = require("uuid");

exports.startNewChat = (req, res) => {
  const chatId = uuidv4();
  res.json({ chatId });
};
