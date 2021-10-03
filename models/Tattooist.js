const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Tattooist = sequelize.define('Tattooist', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = Tattooist