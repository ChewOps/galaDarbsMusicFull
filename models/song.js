// models/song.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
    _id: String,
    title: String,
    artist: String,
    year: Number,
    genre: String,
    lyrics: String

},{ versionKey: false }); // Gets rid of unnessecary __v value field in db


module.exports = mongoose.model('Song', SongSchema);