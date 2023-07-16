const router = require('express').Router();
const gptController = require('../controllers/gpt.controller');

router.post('/create/description', gptController.createDescriptions);

module.exports = router;