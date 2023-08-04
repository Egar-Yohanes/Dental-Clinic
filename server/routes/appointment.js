const appointmentRoute = require('express').Router()
const AppointmentController = require('../controllers/AppointmentController')

appointmentRoute.get('/', AppointmentController.getAppointments)

appointmentRoute.post('/add', AppointmentController.addAppointments)

appointmentRoute.get('/find/:id', AppointmentController.findAppointmentsById)

appointmentRoute.get("/delete/:id", AppointmentController.deleteAppointments);

appointmentRoute.post("/update/:id", AppointmentController.updateAppointments);

module.exports = appointmentRoute