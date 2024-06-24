const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotControllers');

router.post('/webhook', chatbotController.handleUserMessage);

module.exports = router;
