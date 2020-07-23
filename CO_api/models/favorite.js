const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
 
songName: String,                                  //need to add more keywords as project progress
lyrics: String,
artist: String,
urlLink: String                               



})


module.exports = mongoose.model('Favorite', favoriteSchema)



//curl -X POST -H "Content-Type: application/json" -d '{"songName":"acdc"}' http://localhost:3003/favorite