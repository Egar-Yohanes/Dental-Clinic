const { patient } = require('../models')

const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "bebas";

const bcrypt = require('bcrypt');
const saltRounds = 10;

//enkripsi
const encryptPwd = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    catch (error) {
        throw error;
    }
};

//dekripsi
const decryptPwd = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    }

    catch (error) {
        throw error;
    }
};

// JWT token
const tokenGenerator = (data) => {
    const { id, username, name, email, address, phone, birthdate } = data;
    const access_token = jwt.sign(
        {
            id,
            username,
            name,
            email,
            address,
            phone,
            birthdate
        },
        secretCode
    );

    return access_token;
};




class PatientController {
    static async getPatients(req, res) {
        patient.findAll()
            .then(patients => {
                res.json(patients);
            })
            .catch(err => {
                res.json(err);
            })
    }

    static async findById(req, res) {
        //

        try {
            const id = +req.params.id;
            const result = await user.findOne({
                where: { id },
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }


    static async addPatients(req, res) {
        try {
            const { username, name, email, password } = req.body;
            const address = "insert your address";
            const phone = "insert your phone";
            const birthdate = "insert your birthdate";
            const hashedPassword = await encryptPwd(password);

            const Result = await patient.create({
                username,
                name,
                email,
                password: hashedPassword,
                address,
                phone,
                birthdate
            });

            res.status(201).json(Result);
        } catch (err) {
            res.status(500).json(err);
        }
    }


    static async loginPatients(req, res) {
        try {
            const { email, password } = req.body;

            const patientFound = await patient.findOne({
                where: { email }
            });

            if (patientFound) {
                const decryptedPwd = decryptPwd(password, patientFound.password);
                const access_token = tokenGenerator(patientFound);

                if (decryptedPwd) {

                    res.status(200).json({ access_token });
                } else if (!decryptedPwd) {
                    res.status(401).json({ message: `Invalid password` });
                }
            } else {
                res.status(404).json({ message: `Patient not found.` });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async findPatientsById(req, res) {
        const id = +req.params.id;
        patient.findByPk(id)
            .then((result) => {
                if (result) {
                    res.send(result);
                } else {
                    res.send({ message: `Patient id ${id} not found.` });
                }
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static async deletePatients(req, res) {
        const id = Number(req.params.id);
        patient.destroy({
            where: { id },
        })
            .then((result) => {
                res.send(
                    result === 1
                        ? { message: `Patient id ${id} has been deleted.` }
                        : { message: `Patient has not been deleted.` }
                );
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static async updatePatients(req, res) {
        const id = Number(req.params.id);
        const { username, name, email, password, address, phone, birthdate } = req.body;
        patient.update({ username, name, email, password, address, phone, birthdate }, { where: { id } })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = PatientController;