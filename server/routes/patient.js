const patientRoute = require('express').Router()
const PatientController = require('../controllers/PatientController')

patientRoute.get('/', PatientController.getPatients)

patientRoute.get('/account/:id', PatientController.findPatientsById)

patientRoute.post("/add", PatientController.addPatients);

patientRoute.delete("/delete/:id", PatientController.deletePatients);

patientRoute.put("/update/:id", PatientController.updatePatients);

patientRoute.post("/login", PatientController.loginPatients);

module.exports = patientRoute