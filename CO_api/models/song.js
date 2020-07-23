const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
 
songName: String,                                  //need to add more keywords as project progress
lyrics: String,
artist: String                               



})


module.exports = mongoose.model(Song, songSchema)