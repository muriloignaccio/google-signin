const express = require('express');
const LoginController = require('../controllers/LoginController');
const router = express.Router();

router.get('/', LoginController.new);
router.post('/', LoginController.authenticate);
router.post('/google', LoginController.authGoogle);

module.exports = router;