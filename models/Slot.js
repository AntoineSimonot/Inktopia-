const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Slot = sequelize.define('Slot', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    hour: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

}, {
    tableName: "slot"
});

module.exports = Slot