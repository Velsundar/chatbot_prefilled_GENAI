const getBotResponse = require('../chatbot');

exports.handleUserMessage = async (req, res) => {
  const userMessage = req.body.message;
  const botResponse = await getBotResponse(userMessage);
  res.json({ response: botResponse });
};
