const express = require("express");
const router = express.Router();
const {getUserEnquiry} = require('../controllers/Enquiry');

router.post('/enquiry' , getUserEnquiry);


module.exports = router;