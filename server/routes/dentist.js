const dentistRoute = require('express').Router()
const DentistController = require('../controllers/DentistController')

dentistRoute.get('/', DentistController.getDentists)

dentistRoute.post('/add', DentistController.addDentists)

dentistRoute.get('/find/:id', DentistController.findDentistsById)

dentistRoute.get("/delete/:id", DentistController.deleteDentists);

dentistRoute.post("/update/:id", DentistController.updateDentists);

module.exports = dentistRoute