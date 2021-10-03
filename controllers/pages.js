const express = require('express')

const Tattooist = require('../models/Tattooist')
const User = require('../models/User')


const router = express.Router()

router.get('/pages/tattooist/:id', (req, res) => {

    Tattooist.findOne({
        where: { id: req.params.id },
        include: User
    }).then((data) => {
        res.render('tattooist', { 
            data: data,
            title: "Tatoueur"
        });
    })
    

})

router.get('/pages/tattooists', (req, res) => {

    Tattooist.findAll({
       
    }).then((tattooists) => {
    
        res.render('tattooists', { 
            tattooists: tattooists,
            title: "Liste des tatoueurs"
        });

    })

})



module.exports = router