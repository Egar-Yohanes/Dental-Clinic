const patientRoute = require('express').Router()
const PatientController = require('../controllers/PatientController')

patientRoute.get('/', PatientController.getPatients)

patientRoute.get('/account/:id', PatientController.findPatientsById)

patientRoute.post("/add", PatientController.addPatients);

patientRoute.get("/delete/:id", PatientController.deletePatients);

patientRoute.post("/update/:id", PatientController.updatePatients);

patientRoute.post("/login", PatientController.loginPatients);

module.exports = patientRoute