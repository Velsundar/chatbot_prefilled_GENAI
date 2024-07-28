const getBotResponse = require('../chatbot');

exports.handleUserMessage = async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: 'Request body must contain a message.' });
  }
  try {
    const botResponse = await getBotResponse(userMessage);
    res.json({ response: botResponse });
  } catch (error) {
    next(error);
  }
};
