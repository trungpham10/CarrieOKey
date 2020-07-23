const express =require('express');

const favorite = express.Router();

const Favorite = require('../models/favorite.js');


// favorite.get('/', (req,res) =>{
//     res.send("test")
// })

//create

favorite.post('/', async(req,res)=>{

    Favorite.create(req.body, (error, createdFavorite) =>{

        if(error) {
            res.status(400).json({ error: error.message})
        }

        res.status(200).send(createdFavorite)
    })
})





module.exports = favorite