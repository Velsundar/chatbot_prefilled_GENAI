const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/genAiSchema");

const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);

const encodeBase64 = str => Buffer.from(str).toString("base64");
const decodeBase64 = base64 => Buffer.from(base64, "base64").toString("utf-8");

exports.generateContent = async (req, res) => {
  try {
    const { prompt, message, chatId } = req.body;
    const input = prompt || message;
    let chat = await Chat.findOne({ chatId });
    // Create a new chat if not found
    if (!chat) {
      chat = new Chat({ chatId, history: [] });
    }
    // Check if the same request exists in history
    const encodedInput = encodeBase64(input);
    const existingEntry = chat.history.find(
      entry => entry.request === encodedInput
    );
    if (existingEntry) {
      return res.json({ text: decodeBase64(existingEntry.response) });
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(input);
    const response = result.response;
    const text = response.text();

    const encodedResponse = encodeBase64(text);
    // Save the new request and response to history
    chat.history.push({ request: encodedInput, response: encodedResponse });
    await chat.save();

    res.json({ text });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "An error occurred while generating content." });
  }
};
