'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Appointments", "patientId", {
      type: DataTypes.INTEGER,
    });
    await queryInterface.addColumn("Appointments", "dentistId", {
      type: DataTypes.INTEGER,
    });
  },

    async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Appointments", "patientId", {});
    await queryInterface.removeColumn("Appointments", "dentistId", {});
  }
};
