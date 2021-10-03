const express = require('express');
const Slot = require('../models/Slot');
const router = express.Router();

router.get('/slots', (req, res) => {

    Slot.findOne({
        where: {
            hour: req.query.hour,
            date: req.query.date,
            TattooistId: req.query.tattooist_id,
        }
    }).then((slots) => {

        res.json({status: 200, data: slots})

    })

})

router.post('/slots', (req, res) => {
    Slot.create({
        hour: req.body.hour,
        date: req.body.date,
        UserId: 5,
        TattooistId: req.body.tattooist_id,
    }).then((slot) => {

        res.json({status: 201, data: slot})

    })

})

module.exports = router;