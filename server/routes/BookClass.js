const express = require("express");
const router = express.Router();
const {BookClassforUser} = require('../controllers/BookClass');

router.post('/class' ,BookClassforUser);


module.exports = router;