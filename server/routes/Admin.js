const express = require("express");
const router = express.Router();
const {LoginAdmin, getClassBookings , getEnquiry , getNewsLetter, deleteNewsLetter,deleteEnquiries,deleteBookings}  = require('../controllers/Admin');


router.post('/login',LoginAdmin);
router.get('/bookings',getClassBookings);
router.get('/enquiries',getEnquiry);
router.get('/newsletters',getNewsLetter);
router.delete('/delete-bookings/:id' , deleteBookings);
router.delete('/delete-enquiry/:id' , deleteEnquiries);
router.delete('/delete-newsletter/:id' , deleteNewsLetter);

module.exports = router;