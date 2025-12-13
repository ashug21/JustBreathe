const express = require("express");
const router = express.Router();
const {SubscribeUser} = require('../controllers/NewsLetter');

router.post('/subscribe' , SubscribeUser);


module.exports = router;