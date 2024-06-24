const Question = require('./models/Questions');
const configSchema = require('./models/Config');


async function getBotResponse(message) {
  const question = await Question.findOne({ question: message?.toLowerCase() });
  const config = await configSchema.findOne();

  const chatbotName = config ? config.chatbotName : 'EVA';
  
  if (question) {
    return question.answer;
  } else {
    return `I'm sorry, I don't understand that question. My name is ${chatbotName}, how can I assist you?`;
  }
}

module.exports = getBotResponse;
