const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const User = sequelize.define('User', {

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = User