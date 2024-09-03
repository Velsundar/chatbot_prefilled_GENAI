const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotControllers");
const genAiController = require("../controllers/genAiController");
const validateRequest = require("../middleware/validationRequest");
const { verifyToken } = require("../controllers/authController");
const authController = require("../controllers/authController");


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/webhook", validateRequest, chatbotController.handleUserMessage);
router.post("/chat", validateRequest, verifyToken, genAiController.generateContent);
module.exports = router;
