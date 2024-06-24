const configSchema = require('../models/Config');

exports.updateChatbotName = async (req, res) => {
  const { chatbotName } = req.body;

  let config = await configSchema.findOne();
  if (config) {
    config.chatbotName = chatbotName;
  } else {
    config = new configSchema({ chatbotName });
  }

  await config.save();
  res.json({ message: 'Chatbot name updated successfully', chatbotName });
};

exports.getChatbotName = async (req, res) => {
  const config = await configSchema.findOne();
  const chatbotName = config ? config.chatbotName : 'EVA';
  res.json({ chatbotName });
};
