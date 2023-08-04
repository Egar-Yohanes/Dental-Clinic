'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.dentist)
      Appointment.belongsTo(models.patient)
    }
  }
  Appointment.init({
    treatment: DataTypes.STRING,
    appointmentTime: DataTypes.STRING,
    status: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};