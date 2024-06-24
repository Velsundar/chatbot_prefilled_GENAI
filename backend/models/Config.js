const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  chatbotName: { type: String, default: 'EVA' }
});

module.exports = mongoose.model('Config', configSchema);
