const route = require('express').Router()

const localHost = `api`;

route.get(`/${localHost}`, (req, res) => {
    res.status(200).json({
        message: "Home Page",
    });
});

const dentistRoutes = require('./dentist')
route.use('/dentists', dentistRoutes)

const patientRoutes = require('./patient')
route.use('/patients', patientRoutes)

const appointmentRoutes = require('./appointment')
route.use('/appointments', appointmentRoutes)

module.exports = route