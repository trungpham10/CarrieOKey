const express =require('express');

const favorite = express.Router();

const Favorite = require('../models/favorite.js');


//index
favorite.get('/', (req,res)=>{

    Favorite.find({}, (error, foundFavorite) =>{

       if(error) {
           res.status(400).json({error:error.message})
       }
       res.status(200).json(foundFavorite)
    })
})



//create

favorite.post('/', async(req,res)=>{

    Favorite.create(req.body, (error, createdFavorite) =>{

        if(error) {
            res.status(400).json({ error: error.message})
        }

        res.status(200).send(createdFavorite)
    })
})


//update

favorite.put('/:id', (req,res)=>{

 Favorite.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error,updatedFavorite) =>{

    if(error) {
        res.status(400).json({error: error.message})
    }
    res.status(200).json(updatedFavorite)


 })

})



//delete

favorite.delete('/:id', (req,res) =>{

Favorite.findByIdAndRemove(req.params.id, (error, deletedFavorite) =>{

    if(error) {
        res.status(400).json({error:error.message})
    }
    res.status(200).json(deletedFavorite)
})

})




module.exports = favorite