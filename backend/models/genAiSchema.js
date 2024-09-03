const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId:{type: String},
  chatId: { type: String, required: true },
  history: [
    {
      request: String,
      response: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;