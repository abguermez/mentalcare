// api/Models/Appointment.model.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  patientName: { type: String, required: true },
  time: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
