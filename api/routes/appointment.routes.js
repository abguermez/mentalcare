// api/routes/appointment.routes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointment.controller');

router.post('/book-appointment', appointmentController.bookAppointment);

module.exports = router;