const express = require('express');
const router = express.Router();
const twilioController = require('../controllers/twilioController');

router.get('/twilio', twilioController.getTwilioInterface);
router.get('/token', twilioController.getToken);
router.post('/voice', twilioController.handleOutgoingCall);
router.post('/', twilioController.handleOutgoingCall); // Add root endpoint

module.exports = router;