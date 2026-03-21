const express = require('express');
const router = express.Router();

//contorller
const {signup} = require('../controllers/Auth');
const {getAllUsers} = require('../controllers/getuser');

//map path to controller
// router.post('/login', login);
router.post('/signup', signup);
router.get('/getUsers', getAllUsers);

module.exports = router;
