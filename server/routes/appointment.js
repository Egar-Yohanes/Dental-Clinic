const appointmentRoute = require('express').Router()
const AppointmentController = require('../controllers/AppointmentController')

appointmentRoute.get('/', AppointmentController.getAppointments)

appointmentRoute.post('/add', AppointmentController.addAppointments)

appointmentRoute.get('/find/:id', AppointmentController.findAppointmentsById)

appointmentRoute.delete("/delete/:id", AppointmentController.deleteAppointments);

appointmentRoute.put("/update/:id", AppointmentController.updateAppointments);

module.exports = appointmentRoute