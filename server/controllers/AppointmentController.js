const { Appointment, patient, dentist } = require('../models')

class AppointmentController {
    static getAppointments(req, res) {
        Appointment.findAll({
            include: [ patient, dentist]
        })
            .then(appointments => {
                res.json(appointments);
            })
            .catch(err => {
                res.json(err);
            })
    }

    static addAppointments(req, res) {
        const { treatment, appointmentTime, status, patientId, dentistId  } = req.body;
        Appointment.create({
            treatment, appointmentTime, status, patientId, dentistId
        })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    }

    static findAppointmentsById(req, res) {
        const id = +req.params.id;
        Appointment.findByPk(id)
            .then((result) => {
                if (result) {
                    res.send(result);
                } else {
                    res.send({ message: `Appointment id ${id} not found.` });
                }
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static deleteAppointments(req, res) {
        const id = Number(req.params.id);
        Appointment.destroy({
            where: { id },
        })
            .then((result) => {
                res.send(
                    result === 1
                        ? { message: `Appointment id ${id} has been deleted.` }
                        : { message: `Appointment has not been deleted.` }
                );
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static updateAppointments(req, res) {
        const id = Number(req.params.id);
        const { treatment, appointmentTime, status, dentistId, patientId  } = req.body;
        Appointment.update({ treatment, appointmentTime, status, dentistId, patientId }, { where: { id } })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = AppointmentController;