const sequelize = require('./database')

const User = require('./models/User')
const Tattooist = require('./models/Tattooist')
const Slot = require('./models/Slot')
// Relation Slot to User and Tatooist
Tattooist.belongsToMany(User, {through: { model: Slot, unique: false } });
User.belongsToMany(Tattooist, {through: { model: Slot, unique: false } });

sequelize.sync({alter: true})