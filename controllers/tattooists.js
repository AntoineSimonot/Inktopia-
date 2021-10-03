const express = require('express');
const Tattooist = require('../models/Tattooist')
const router = express.Router();

router.get('/tatooist', (req, res) => {

    Tattooist.findAll({
        
    }).then((tattooists) => {

        res.json({status: 200, data: tattooists})

    })

})

// router.post('/users', (req, res) => {

//     User.create({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         nickname: req.body.nickname,
//         password: req.body.password,
//     }).then((user) => {

//         res.json({status: 201, data: user})

//     })

// })

module.exports = router;