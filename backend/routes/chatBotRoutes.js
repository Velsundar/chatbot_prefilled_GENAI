const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotControllers");
const genAiController = require("../controllers/genAiController");
const validateRequest = require("../middleware/validationRequest");

router.post("/webhook", validateRequest, chatbotController.handleUserMessage);
router.post("/chat",validateRequest, genAiController.generateContent);

module.exports = router;
