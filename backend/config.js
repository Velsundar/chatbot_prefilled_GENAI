require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  dbURI: process.env.MONGODB_URI,
  chatbotName: process.env.CHATBOT_NAME || 'EVA',
};

module.exports = config;
