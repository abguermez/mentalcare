// api/controller/appointment.controller.js
const Appointment = require('../Models/Appointment.model');

exports.bookAppointment = async (req, res) => {
  const { doctorName, patientName, time } = req.body;

  const appointment = new Appointment({
    doctorName,
    patientName,
    time,
  });

  try {
    await appointment.save();
    res.status(201).send('Appointment booked successfully');
  } catch (error) {
    res.status(500).send('Failed to book appointment');
  }
};
