const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotControllers");
const validateRequest = require("../middleware/validationRequest");

router.post("/webhook", validateRequest, chatbotController.handleUserMessage);
module.exports = router;
