const express = require('express');
const router = express.Router();

//contorller
const {login, signup} = require('../Controllers/Auth');

//map path to controller
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
