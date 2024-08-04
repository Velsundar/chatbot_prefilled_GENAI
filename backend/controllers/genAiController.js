const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);

exports.generateContent = async (req, res) => {
  try {
    const { prompt, message } = req.body;
    const input = prompt || message;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(input);
    const response = result.response;
    const text = response.text();
    res.json({ text });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "An error occurred while generating content." });
  }
};
