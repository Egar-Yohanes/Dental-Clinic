'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dentist.hasMany(models.Appointment)
    }
  }
  dentist.init({
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    photo: DataTypes.STRING,
    phone: DataTypes.STRING,
    workingTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dentist',
  });
  return dentist;
};