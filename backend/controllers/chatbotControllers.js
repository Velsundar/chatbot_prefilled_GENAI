const getBotResponse = require("../chatbot");
const CustomError = require("../utils/customError");

exports.handleUserMessage = async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    throw new CustomError(400, "Request body must contain a message.");
  }
  try {
    const botResponse = await getBotResponse(userMessage);
    res.json({ response: botResponse });
  } catch (error) {
    next(error);
  }
};
