const { dentist } = require('../models')

class DentistController {
    static getDentists(req, res) {
        dentist.findAll()
            .then(dentists => {
                res.json(dentists);
            })
            .catch(err => {
                res.json(err);
            })
    }

    static addDentists(req, res) {
        const {name,specialization,photo,phone,workingTime  } = req.body;
        dentist.create({
            name,specialization,photo,phone,workingTime
        })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            });
    }

    static findDentistsById(req, res) {
        const id = +req.params.id;
        dentist.findByPk(id)
            .then((result) => {
                if (result) {
                    res.send(result);
                } else {
                    res.send({ message: `Dentist id ${id} not found.` });
                }
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static deleteDentists(req, res) {
        const id = Number(req.params.id);
        dentist.destroy({
            where: { id },
        })
            .then((result) => {
                res.send(
                    result === 1
                        ? { message: `Dentist id ${id} has been deleted.` }
                        : { message: `Dentist has not been deleted.` }
                );
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static updateDentists(req, res) {
        const id = Number(req.params.id);
        const {name,specialization,photo,phone,workingTime} = req.body;
        dentist.update({ name,specialization,photo,phone,workingTime }, { where: { id } })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = DentistController;