const Question = require('./models/Questions');
const configSchema = require('./models/Config');
const stringSimilarity = require('string-similarity');
const config = require('./config');

async function getBotResponse(message) {
  if (!message) {
    throw new Error('Message is required');
  }
  const allQuestions = await Question.find({});
  const chatbotName = config.chatbotName;

  if (allQuestions.length > 0) {
    const questionTexts = allQuestions.map(q => q.question);
    const { bestMatch, bestMatchIndex } = stringSimilarity.findBestMatch(message?.toLowerCase(), questionTexts);
    if (bestMatch.rating > 0.5) {
      return allQuestions[bestMatchIndex].answer;
    }
  }
  
  return `I'm sorry, I don't understand that question. My name is ${chatbotName}, how can I assist you?`;
}

module.exports = getBotResponse;
