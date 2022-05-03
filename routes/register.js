const express = require('express');
const RegisterController = require('../controllers/RegisterController');
const router = express.Router();

router.get('/', RegisterController.new);
router.post('/', RegisterController.create);

module.exports = router;