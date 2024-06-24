const express = require('express');
const router = express.Router();
const configController = require('../controllers/configControllers');

router.post('/updateChatbotName', configController.updateChatbotName);
router.get('/getChatbotName', configController.getChatbotName);

module.exports = router;
